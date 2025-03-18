// import React, { useState } from "react";
// import { TextField, Button, Container } from "@mui/material";
// import API from "../utils/api";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     try {
//       await API.post("/sign_up", form);
//       navigate("/login");
//     } catch (err) {
//       alert("Registration failed");
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <h2>Register</h2>
      
//       <TextField label="Email" fullWidth margin="normal" onChange={(e) => setForm({ ...form, email: e.target.value })} />
//       <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setForm({ ...form, password: e.target.value })} />
//       <Button variant="contained" onClick={handleSubmit}>Register</Button>
//     </Container>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // const handleSubmit = async () => {
  //   try {
  //     await API.post("/sign_up", form);
  //     navigate("/login");
  //   } catch (err) {
  //     alert("Registration failed");
  //   }
  // };


  // Register.js
// Register.js
// Register.js
// const handleSubmit = async () => {
  // try {
    // await API.post("/sign_up", form);
    // localStorage.setItem("hasRegistered", "true"); // ✅ Ensure this line runs
    // navigate("/login"); // Redirect to login
  // } catch (err) {
    // Handle errors
  // }
// };
  


const handleSubmit = async () => {
  try {
    const response = await API.post("/sign_up", form);
    console.log("Response:", response.data);
    localStorage.setItem("hasRegistered", "true");
    navigate("/login");
  } catch (err) {
    console.error("Error during registration:", err);
    alert("Registration failed");
  }
};


  return (
    <Container maxWidth="sm">
      <h2>Register</h2>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <TextField
        label="Date of Birth"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
        value={form.dob}
        onChange={(e) => setForm({ ...form, dob: e.target.value })}
      />
      <TextField
        label="Phone Number"
        fullWidth
        margin="normal"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
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
        Register
      </Button>
    </Container>
  );
};

export default Register;
