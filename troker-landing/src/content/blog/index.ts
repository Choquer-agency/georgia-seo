import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

/* ─── Types ─── */

export interface AuthorProfile {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  htmlContent: string;
  author: AuthorProfile;
  date: string;
  modifiedDate: string;
  region: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  readingTime: number;
  wordCount: number;
}

/* ─── Authors ─── */

export const authors: Record<string, AuthorProfile> = {
  bryce: {
    name: "Bryce Choquer",
    role: "Founder & Lead Developer",
    bio: "Bryce has 8 years of experience building high-performance websites with Webflow. He has delivered 150+ projects across 50+ industries and is a certified Webflow Expert Partner.",
    image: "/images/authors/bryce.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/brycechoquer",
    },
  },
};

/* ─── Helpers ─── */

const postsDirectory = path.join(process.cwd(), "src/content/blog/posts");

/* ─── Heading ids ───
 * Every heading gets an id, so a post's table of contents ("- [Section](#section)")
 * jumps to it. The rule is GitHub's (github-slugger), the one Cliff writes the
 * table with: the heading's text lowercased, everything but letters, numbers,
 * marks, connectors, hyphens and spaces removed, spaces as hyphens, and a
 * repeated id numbered "-1", "-2" in page order. */

const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: "\u00a0" };
const NOT_IN_ID = new RegExp("[^\\p{L}\\p{M}\\p{N}\\p{Pc}\\- ]", "gu");

function decodeEntities(text: string): string {
  return text.replace(/&(#[xX][0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g, (match, code: string) => {
    if (code.startsWith("#")) {
      const point = /^#[xX]/.test(code) ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(point) && point > 0 && point <= 0x10ffff ? String.fromCodePoint(point) : match;
    }
    return ENTITIES[code.toLowerCase()] ?? match;
  });
}

function withHeadingIds(html: string): string {
  const occurrences = new Map<string, number>();
  return html.replace(/<h([1-6])>([\s\S]*?)<\/h\1>/g, (_heading, level: string, inner: string) => {
    const original = decodeEntities(inner.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim().toLowerCase().replace(NOT_IN_ID, "").replace(/ /g, "-");
    let id = original;
    while (occurrences.has(id)) {
      const count = occurrences.get(original)! + 1;
      occurrences.set(original, count);
      id = `${original}-${count}`;
    }
    occurrences.set(id, 0);
    return id ? `<h${level} id="${id}">${inner}</h${level}>` : `<h${level}>${inner}</h${level}>`;
  });
}

function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function getWordCount(content: string): number {
  return content.trim().split(/\s+/).length;
}

async function parsePost(filePath: string): Promise<BlogPost> {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const htmlContent = withHeadingIds(processed.toString());

  const author = authors[data.author as string] || authors.bryce;

  return {
    slug: data.slug,
    title: data.title,
    excerpt: data.excerpt,
    htmlContent,
    author,
    date: data.date,
    modifiedDate: data.modifiedDate || data.date,
    region: data.region,
    category: data.category || "webflow",
    tags: data.tags || [],
    featuredImage: data.featuredImage,
    readingTime: getReadingTime(content),
    wordCount: getWordCount(content),
  };
}

function getAllMarkdownFiles(): string[] {
  const files: string[] = [];

  if (!fs.existsSync(postsDirectory)) return files;

  const regionDirs = fs.readdirSync(postsDirectory);
  for (const dir of regionDirs) {
    const regionPath = path.join(postsDirectory, dir);
    if (!fs.statSync(regionPath).isDirectory()) continue;

    const mdFiles = fs.readdirSync(regionPath).filter((f) => f.endsWith(".md"));
    for (const file of mdFiles) {
      files.push(path.join(regionPath, file));
    }
  }

  return files;
}

/* ─── Public API ─── */

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const files = getAllMarkdownFiles();
  const posts = await Promise.all(files.map(parsePost));
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPostsByRegion(region: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.region === region);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const allPosts = await getAllBlogPosts();
  return allPosts.find((post) => post.slug === slug) || null;
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.map((post) => post.slug);
}
