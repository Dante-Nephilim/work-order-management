import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import contractRouter from "./routes/contractorRoutes.js";

dotenv.config();

const app = express();

//connect to db
connectDB();

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/contracts", contractRouter);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`Server Running on port ${Port}`);
});
