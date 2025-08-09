// Basic email validation model
export function validateEmailData({ to, subject, text }) {
  if (!to || !subject || !text) {
    throw new Error("Missing required fields: to, subject, or text");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    throw new Error("Invalid email address");
  }
}
