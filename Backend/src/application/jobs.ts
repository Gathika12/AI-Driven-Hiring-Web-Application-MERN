import express from "express";
import { Request, Response} from "express-serve-static-core";
import jobs from '../infrastructure/jobs'

export const getAllJobs = (req: Request,res: Response) =>{
    return res.json(jobs);

}

export const createJob = (req: Request,res: Response) =>{
 //console.log(req.body);
 jobs.push(req.body);
 return res.status(201).send();

}

export const DeleteJobs = (req: Request, res: Response) => {
 const IndexToRemove = jobs.findIndex(el => el._id === req.params._id)
 jobs.splice(IndexToRemove, 1)
 if(IndexToRemove === -1)
 {
   return res.status(404).send();
 }
 //console.log(req.params);
 return res.status(204).send();

}

export const getJobById = (req: Request, res: Response) => {
 const job = jobs.find(el => el._id === req.params._id);
 if(!job){
   return res.status(404).send();
 }
 return res.json(job);
}

export const updateJob = (req: Request, res: Response) => {
 const IndexToUpdate = jobs.findIndex(el => el._id === req.params._id)
 jobs[IndexToUpdate].title = req.body.title;
 jobs[IndexToUpdate].type = req.body.type;
 jobs[IndexToUpdate].location = req.body.location;

 //console.log(req.params);
 return res.status(204).send();

}