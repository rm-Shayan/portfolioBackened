import {
  addTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial
} from "../Model/modelTestimonial.js";

export function createTestimonial(req, res, next) {
  try {
    const newTestimonial = addTestimonial(req.body);
    res.status(201).json({ success: true, data: newTestimonial });
  } catch (err) {
    err.statusCode = 400;
    next(err);
  }
}

export function fetchTestimonials(req, res, next) {
  try {
    const allTestimonials = getTestimonials();
    res.json({ success: true, data: allTestimonials });
  } catch (err) {
    next(err);
  }
}

export function editTestimonial(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const updated = updateTestimonial(id, req.body);
    res.json({ success: true, data: updated });
  } catch (err) {
    err.statusCode = 400;
    next(err);
  }
}

export function removeTestimonial(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const deleted = deleteTestimonial(id);
    res.json({ success: true, data: deleted });
  } catch (err) {
    err.statusCode = 400;
    next(err);
  }
}
