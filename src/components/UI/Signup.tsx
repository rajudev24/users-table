import { BiLogoApple, BiSmile, BiSolidLockAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Input, Checkbox, Button } from "antd";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegisterUserMutation } from "../../redux/api/userApiSlice";

export type IRegSignData = {
  email: string;
  password: string;
};
export default function Signup() {
  const [regUser] = useRegisterUserMutation();
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
      const resultAction = await regUser(user);

      if ("data" in resultAction) {
        if (resultAction.data.id) {
          toast.success("Registration Successful");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          console.error("Invalid response from the API");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex  justify-center items-center">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-[#323B4B] py-2">
          Getting Started
        </h1>
        <p className="text-[#8A94A6] pb-2">Create an account to continue!</p>
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
            className="h-10 my-5 border-2 w-3/4"
            placeholder="@ Your Email"
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
          <Input
            className="h-10 border-2 w-3/4"
            placeholder="Your Name"
            prefix={<BiSmile className="text-[#C1C7D0]" />}
            type="text"
          />

          <Input.Password
            className="h-10 my-5 border-2 w-3/4"
            placeholder="Create Password"
            prefix={<BiSolidLockAlt className="text-[#C1C7D0] " />}
            type="password"
            required
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className="flex justify-between w-3/4 items-center ml-20">
          <hr className="w-12 border-2 mr-2 border-[#38CB89] rounded-md" />{" "}
          <hr className="w-12 mr-2 border-2 border-[#38CB89] rounded-md" />{" "}
          <hr className="w-12 mr-2 border-2 border-[#38CB89] rounded-md" />{" "}
          <hr className="w-12 mr-2 border-2 border-[#38CB89] rounded-md" />{" "}
          <hr className="w-12 mr-2 border-2 border-[#38CB89] rounded-md" />{" "}
          <hr className="w-12 border-2 rounded-md" />
        </div>
        <div className="text-start my-4 ml-20  ">
          <Checkbox className="text-[#B0B7C3]">
            I agree to the Terms & Conditions
          </Checkbox>
        </div>
        <Button
          onClick={handleFormSubmit}
          className=" bg-[#377DFF] w-3/4 h-10 text-lg text-white hover:bg-white"
        >
          Sign Up
        </Button>

        <div className="m-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#377DFF]">
            Sign In
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
