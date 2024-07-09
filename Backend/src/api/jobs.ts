import express from "express"
//import jobs from '../infrastructure/jobs'
import { createJob, DeleteJobs, getAllJobs, getJobById, updateJob } from "../application/jobs";

const jobsRouter = express.Router();

jobsRouter .route("/").get(getAllJobs).post(createJob);
jobsRouter .route("/:_id").get(getJobById).put(updateJob).delete(DeleteJobs);



export default jobsRouter;