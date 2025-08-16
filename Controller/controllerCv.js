import path from "path";

// sendcv controller function
export const sendcv = (req, res) => {
  try {
    const filePath = path.resolve("Assets/cv.pdf"); // apna CV ka path
    res.download(filePath, "My-CV.pdf"); // user ko download hoga
  } catch (error) {
    console.error("Error while sending CV:", error);
    res.status(500).send("Server error: CV not found");
  }
};
