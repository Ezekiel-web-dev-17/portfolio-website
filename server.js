import express from "express";
import { PORT } from "./config/env.config.js";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js";
import commentRoute from "./routes/connect.route.js";
import { connectToDatabase } from "./connection/dbConnect.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.get("/", (req, res) => res.send({ hello: "My first Message." }));
app.use("/api/v1/comment", commentRoute);
app.use(errorMiddleware);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server is running on http://localhost:${PORT}`);
});
