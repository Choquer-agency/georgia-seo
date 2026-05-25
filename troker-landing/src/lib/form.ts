// Formspark form ID for georgiaseoexperts.com. The value is public by design
// (NEXT_PUBLIC_*); the inline fallback exists because this project's Next.js
// build replaces `process.env` with a bare polyfill that strips runtime values.
const DEFAULT_FORM_ID = "cwnxLkFTW";

export async function submitForm(data: Record<string, unknown>) {
  const formId = process.env.NEXT_PUBLIC_FORMSPARK_ID || DEFAULT_FORM_ID;
  if (!formId) {
    throw new Error("NEXT_PUBLIC_FORMSPARK_ID is not configured");
  }

  const response = await fetch(`https://submit-form.com/${formId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }

  return response.json();
}
