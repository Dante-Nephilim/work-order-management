import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import contractRouter from "./routes/contractorRoutes.js";
import entityRouter from "./routes/entityRoutes.js";
import locationRouter from "./routes/locationRoutes.js";
import workOrderRouter from "./routes/workOrderRoutes.js";
import billRouter from "./routes/billRoutes.js";
import dashboardRouter from "./routes/dashboardRoutes.js";
import auth from "./middlewares/auth.js";
dotenv.config();

const app = express();

//connect to db
connectDB();

//middlewares
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/contractors", auth, contractRouter);
app.use("/api/entities", auth, entityRouter);
app.use("/api/locations", auth, locationRouter);
app.use("/api/work-orders", auth, workOrderRouter);
app.use("/api/bills", auth, billRouter);
app.use("/api/dashboard", auth, dashboardRouter);

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
  console.log(`Server Running on port ${Port}`);
});
