import React, { useEffect, useState } from "react";
import API from "../utils/api";
import JobCard from "../components/JobCard";
import { Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    const res = await API.get("/jobs");
    setJobs(res.data);
  };

  const handleDelete = async (id) => {
    await API.delete(`/jobs/${id}`);
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Container>
      <h2>All Job Posts</h2>
      <Button variant="contained" onClick={() => navigate("/create-job")}>Create Job</Button>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onDelete={() => handleDelete(job.id)} />
      ))}
    </Container>
  );
};

export default Home;
