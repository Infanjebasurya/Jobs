import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreateJob from "./pages/CreateJob";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const CheckRegistration = () => {
  const hasRegistered = localStorage.getItem("hasRegistered");
  return hasRegistered ? <Outlet /> : <Navigate to="/register" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route element={<CheckRegistration />}>
          <Route path="/login" element={<Login />} />
          <Route path="/create-job" element={<PrivateRoute><CreateJob /></PrivateRoute>} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
