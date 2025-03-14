import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const [form, setForm] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await API.post("/jobs", form);
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <h2>Create Job</h2>
      <TextField label="Title" fullWidth margin="normal" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <TextField label="Description" multiline rows={4} fullWidth margin="normal" onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <Button variant="contained" onClick={handleSubmit}>Post Job</Button>
    </Container>
  );
};

export default CreateJob;
