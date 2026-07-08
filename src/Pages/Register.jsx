import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [error, setError] = useState({});
  // const [fname,setFname]=useState('');
  // const [lname,setLname]=useState('');
  // const [uname,setUname]=useState('');
  // const [mob,setMob]=useState('');
  // const [email,setEmail]=useState('');
  // const [pass,setPass]=useState('');
  // const [cpass,setCpass]=useState('');
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (error[name]) {
      setError({ ...error, [name]: "" });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let err = {};

    if (!formData.firstName.trim()) err.firstName = "First Name is Required";
    if (!formData.lastName.trim()) err.lastName = "Last Name is Required";
    if (!formData.userName.trim()) err.userName = "User Name is Required";
    if (!formData.mobile.trim()) err.mobile = "Mobile No. is Required";
    if (!formData.email.trim()) err.email = "Email is Required";

    if (!formData.password) {
      err.password = "Password is Required";
    } else if (formData.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      err.confirmPassword = "Passwords doesn\'t Match";
    }

    setError(err);

    if (Object.keys(err).length === 0) {
      console.log("Submitted Data:", formData);
      localStorage.setItem("registeredUser",JSON.stringify(formData));
      toast.success("Registration Complete.");
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <ToastContainer/>
        <h1 className="text-4xl font-bold">Registration</h1>
        <form onSubmit={handleRegister} className="flex flex-col gap-2 p-4">
          <Label className="text-lg">
            First_Name:- <Input type="text" name="firstName" value={formData.firstName} placeholder="Abc" onChange={handleChange}></Input>
          </Label>
          {error.firstName && <span className="text-xs text-red-500">{error.firstName}</span>}
          <Label className="text-lg">
            Last_Name:- <Input type="text" name="lastName" value={formData.lastName} placeholder="patel" onChange={handleChange}></Input>
          </Label>
          {error.lastName && <span className="text-xs text-red-500">{error.lastName}</span>}
          <Label className="text-lg">
            Username:- <Input type="text" name="userName" value={formData.userName} placeholder="user" onChange={handleChange}></Input>
          </Label>
          {error.userName && <span className="text-xs text-red-500">{error.userName}</span>}
          <Label className="text-lg">
            Mobile_No.:- <Input type="number" name="mobile" value={formData.mobile} placeholder="1823672822" onChange={handleChange}></Input>
          </Label>
          {error.mobile && <span className="text-xs text-red-500">{error.mobile}</span>}
          <Label className="text-lg">
            Email:- <Input type="email" name="email" value={formData.email} placeholder="Abc12@gmail.com" onChange={handleChange}></Input>
          </Label>
          {error.email && <span className="text-xs text-red-500">{error.email}</span>}
          <Label className="text-lg">
            Password:-{" "}
            <Input
              type={isHidden ? "password" : "text"}
              name="password"
              value={formData.password}
              onChange={handleChange}
            ></Input>
          </Label>
          {error.password && <span className="text-xs text-red-500">{error.password}</span>}
          <Label className="text-lg">
            Confirm_Password:-{" "}
            <Input 
            type={isHidden ? "password" : "text"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            ></Input>
          </Label>
          {error.confirmPassword && <span className="text-xs text-red-500">{error.confirmPassword}</span>}
          <Button variant="outline" onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? "Show Password" : "Hide Password"}
          </Button>
        <Button type="submit" className="mt-2 p-2 h-8 w-100 text-2xl">Register</Button>
        </form>
        <Link to="/">
        Already have an Account?{" "}
        <span className="text-blue-700 font-bold">Go to Login</span>
      </Link>
      </div>
    </>
  );
};

export default Register;
