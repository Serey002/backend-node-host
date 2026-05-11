import express from "express";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use(
  "/api/users",
  async (req, res, next) => {
    try {
      await connectDB();
      next();
    } catch (error) {
      res.status(500).json({
        message: "Database connection failed"
      });
    }
  },
  userRoute
);

export default app;
