import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [error, setError] = useState({});
  const [logindata, setLogindata] = useState({
    userName: "",
    password: "",
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogindata({ ...logindata, [name]: value });

    if (error[name]) {
      setError({ ...error, [name]: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let err = {};
    if (!logindata.userName.trim())
      err.userName = "User Name is Needed For Login.";
    if (!logindata.password) {
      err.password = "Password is Necessary for Login.";
    } else if (logindata.password.length < 6) {
      err.password = "Password might be incorrect";
    }

    setError(err);

    if (Object.keys(err).length === 0) {
      console.log("Login Data: -", logindata);
      const currentUserRaw=localStorage.getItem("registeredUser");
      if(!currentUserRaw)
      {
        toast.warning("No Registered Account Found. Please Register first!!");
        return;
      }
      const currentUser=JSON.parse(currentUserRaw);

      if(logindata.userName === currentUser.userName && logindata.password === currentUser.password)
      {
        toast.success("Login Successful");
        const token="userlogged";
        sessionStorage.setItem("token",token);
        navigate("/home");
      }
      else
      {
        toast.warning("Invalid Username or Password. Please try Again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <ToastContainer/>
      <h1 className="text-4xl font-bold">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-2 p-3">
        <Label className="text-lg">
          Username:-{" "}
          <Input
            type="text"
            name="userName"
            value={logindata.userName}
            placeholder="Abc@123"
            onChange={handleChange}
          ></Input>
        </Label>
        {error.userName && (
          <span className="text-red-500 text-xs">{error.userName}</span>
        )}
        <Label className="text-lg">
          Password:-{" "}
          <Input
            type={isHidden ? "password" : "text"}
            name="password"
            value={logindata.password}
            onChange={handleChange}
          ></Input>
          <Button type="button" onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? "👁️" : "🔒"}
          </Button>
        </Label>
        {error.password && (
          <span className="text-red-500 text-xs">{error.password}</span>
        )}
        <Button type="submit" className="mt-4 p-2 h-9 w-80 text-2xl">
          Login
        </Button>
      </form>
      <Link to="/Register">
        Don't have an Account?{" "}
        <span className="text-blue-700 font-bold">Register</span>
      </Link>
    </div>
  );
};

export default Login;
