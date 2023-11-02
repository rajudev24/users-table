import { BiLogoApple, BiSolidLockAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Input, Checkbox, Button } from "antd";
import { useState } from "react";
import { IRegSignData } from "./Signup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginUserMutation } from "../../redux/api/userApiSlice";

export default function SignIn() {
  const [logUser] = useLoginUserMutation();
  const [data, setData] = useState<IRegSignData>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const user: IRegSignData = {
      email: data.email,
      password: data.password,
    };
    try {
      const resultAction = await logUser(user);
      if ("data" in resultAction) {
        if (resultAction.data.token) {
          toast.success("Login Succesfull");
          localStorage.setItem("token", resultAction.data.token);
          setTimeout(() => {
            navigate("/users");
          }, 2000);
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="flex  justify-center items-center">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-[#323B4B] py-2">Sign In</h1>
        <p className="text-[#8A94A6] pb-2">Welcome back, you’ve been missed!</p>
        <div className="flex justify-center text-[#8A94A6]">
          <button className="flex items-center bg-[#F0F5FA]  p-2 px-4 rounded-lg mr-4">
            <img width={15} src="./img/google.png" alt="" className="mr-1" />{" "}
            Sign Up with Google
          </button>
          <button className="flex items-center  bg-[#F0F5FA] p-2 px-4 rounded-lg">
            <BiLogoApple className="mr-1" /> Sign Up with Apple ID
          </button>
        </div>
        <div className="flex justify-center text-[#B0B7C3] mt-2">
          <hr className="w-48 mt-3 mr-2" /> OR <hr className="w-48 mt-3 ml-2" />
        </div>
        <div>
          <Input
            className="h-10 my-5 border-2 w-4/4"
            placeholder="@ Your Email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />

          <Input.Password
            className="h-10 my-5 border-2 w-4/4"
            placeholder="Create Password"
            prefix={<BiSolidLockAlt className="text-[#C1C7D0] " />}
            type="password"
            required
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="flex justify-between w-full items-center ">
          <hr className="w-12 border-2 mr-2 border-[#38CB89] rounded-md" />{" "}
          <hr className="w-12 mr-2 border-2 border-[#38CB89] rounded-md" />{" "}
          <hr className="w-12 mr-2 border-2 border-[#38CB89] rounded-md" />{" "}
          <hr className="w-12 mr-2 border-2 border-[#38CB89] rounded-md" />{" "}
          <hr className="w-12 mr-2 border-2 border-[#38CB89] rounded-md" />{" "}
          <hr className="w-12 border-2 rounded-md" />
        </div>
        <div className="text-start my-4  ">
          <Checkbox className="text-[#B0B7C3]">Remember Me</Checkbox>
        </div>
        <Button
          onClick={handleFormSubmit}
          className=" bg-[#377DFF] w-full h-10 text-lg text-white hover:bg-white"
        >
          Sign In
        </Button>

        <div className="m-4">
          Don’t have an account yet?{" "}
          <Link to="/" className="text-[#377DFF]">
            Sign Up
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
