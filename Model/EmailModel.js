// Basic email validation model
export function validateEmailData(data) {
  if (!data.subject || !data.text) {
    throw new Error("Missing required fields: to, subject, or text");
  }
}
