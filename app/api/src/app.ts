import express, { Request, Response } from "express";
import cors from "cors";
import { router as packageRoutes } from "./routes/package.routes";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/api/packages", packageRoutes);

app.use("/", (_req: Request, res: Response): void => {
  res.json({ message: "Nothing to see here!" });
});

export default app;
