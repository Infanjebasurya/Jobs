import React, { useState } from "react";
import { TextField, Button, Container, Typography, Snackbar } from "@mui/material";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  console.log("Login component rendered"); // ✅ Check if this appears in the browser console

  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(""); // For success/error messages
  const [openSnackbar, setOpenSnackbar] = useState(false); // For Snackbar visibility
  const navigate = useNavigate();

  // const handleSubmit = async () => {
  //   try {
  //     const res = await API.post("/sign_in", form);
  //     localStorage.setItem("token", res.data.token); // Store the token in localStorage
  //     setMessage(res.data.message); // Set success message
  //     setOpenSnackbar(true); // Show Snackbar

  //     // Redirect to the specified URL after a delay
  //     setTimeout(() => {
  //       window.location.href = res.data.redirectUrl; // Redirect to the external link
  //     }, 2000); // 2 seconds delay
  //   } catch (err) {
  //     if (err.response) {
  //       setMessage(err.response.data.message); // Set error message from server
  //     } else {
  //       setMessage("An unexpected error occurred"); // Set generic error message
  //     }
  //     setOpenSnackbar(true); // Show Snackbar
  //   }
  // };


 // In Login.js, update the handleSubmit function:
// Login.js
const handleSubmit = async () => {
  try {
    const res = await API.post("/sign_in", form);
    localStorage.setItem("token", res.data.token);
    setMessage("Login successful! Redirecting...");
    setOpenSnackbar(true);

    // Redirect to the external URL after 2 seconds
    setTimeout(() => {
      window.location.href = "create-job";
    }, 2000);
  } catch (err) {
    if (err.response) {
      setMessage(err.response.data.message);
    } else {
      setMessage("An unexpected error occurred");
    }
    setOpenSnackbar(true);
  }
};

const handleCloseSnackbar = () => {
  setOpenSnackbar(false);
};



  return (
    <Container maxWidth="sm">
      <h2>Login</h2>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>

      {/* Snackbar for showing messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} // Auto-close after 3 seconds
        onClose={handleCloseSnackbar}
        message={message}
      />
    </Container>
  );
};

export default Login;