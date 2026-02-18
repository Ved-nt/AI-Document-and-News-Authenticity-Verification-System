import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

// Prediction Route
app.post("/predict", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  // Dummy ML logic
  let prediction = "REAL";
  let confidence = 0.92;

  if (text.toLowerCase().includes("fake")) {
    prediction = "FAKE";
    confidence = 0.85;
  }

  res.json({
    prediction,
    confidence
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
