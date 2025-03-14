import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const JobCard = ({ job, onDelete }) => (
  <Card sx={{ marginBottom: 2 }}>
    <CardContent>
      <Typography variant="h5">{job.title}</Typography>
      <Typography>{job.description}</Typography>
      <Button color="error" onClick={onDelete}>Delete</Button>
    </CardContent>
  </Card>
);

export default JobCard;
