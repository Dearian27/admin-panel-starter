import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';

const app = express();
dotenv.config();


const PORT = process.env.PORT;
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
mongoose.set("strictQuery", false);
app.use(
  cors({
    // origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
// app.use((req, res, next) => {
//   next(createError(404));
// });

const connect = () => {
  mongoose
    .connect(process.env.MONGO, {})
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB");
      throw err;
    });
};

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;