import { useEffect, useState } from "react";
import "./Css/App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoute from "./components/protectedRoute";
import { toast, ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import { Tabs } from "@ninna-ui/navigation";
import { Button } from "./components/ui/button";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      setIsAuthenticated(false);
      navigate("/");
    } else {
      setIsAuthenticated(true);
      navigate("/home");
      toast.success("Welcome..");
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
