import express from "express";
import { Request, Response} from "express-serve-static-core";
import jobsRouter from "./api/jobs";

const app = express();
app.use(express.json());








//const userRouter = require("./users")

app.use("/jobs",jobsRouter);


const PORT=8000;
app.listen(PORT, () => console.log('Server is listening on port ${port}'));
