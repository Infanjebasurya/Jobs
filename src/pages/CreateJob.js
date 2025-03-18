import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const [form, setForm] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
    
      console.log("Job created successfully!");

      // setTimeout(() => {
      //   navigate("/");
      // }, 2000);

      // Redirect to external link after 2 seconds
      setTimeout(() => {
        window.location.href = "https://career.techforing.com/"; // Redirect to external link
      }, 1000);

    } catch (err) {
      console.error("Error creating job:", err);
    }
  };

  return (
    <Container maxWidth="sm">
      <h2>Create Job</h2>
      <TextField
        label="Title"
        fullWidth
        margin="normal"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <TextField
        label="Description"
        multiline
        rows={4}
        fullWidth
        margin="normal"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Post Job
      </Button>
    </Container>
  );
};

export default CreateJob;
