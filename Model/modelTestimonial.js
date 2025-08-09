import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "testimonial.json");

if (!fs.existsSync(filePath)) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify([]));
}

function readData() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export function addTestimonial({ name, message }) {
  if (!name || !message) throw new Error("Name and message are required");
  const testimonials = readData();
  const newTestimonial = { id: Date.now(), name, message };
  testimonials.push(newTestimonial);
  writeData(testimonials);
  return newTestimonial;
}

export function getTestimonials() {
  return readData();
}

export function updateTestimonial(id, { name, message }) {
  const testimonials = readData();
  const index = testimonials.findIndex(t => t.id === id);
  if (index === -1) throw new Error("Testimonial not found");
  if (name) testimonials[index].name = name;
  if (message) testimonials[index].message = message;
  writeData(testimonials);
  return testimonials[index];
}

export function deleteTestimonial(id) {
  const testimonials = readData();
  const index = testimonials.findIndex(t => t.id === id);
  if (index === -1) throw new Error("Testimonial not found");
  const deleted = testimonials.splice(index, 1);
  writeData(testimonials);
  return deleted[0];
}
