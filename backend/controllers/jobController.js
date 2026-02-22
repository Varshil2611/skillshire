import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  const { title, company, location, description, salary } = req.body;

  const job = await Job.create({
    title,
    company,
    location,
    description,
    salary,
    postedBy: req.user._id,
  });
  res.status(201).json(job);
};

export const getJobs = async (req, res) => {
  const jobs = await Job.find().populate("postedBy", "name email");
  res.json(jobs);
};
