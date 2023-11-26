import { BiLogoApple, BiSmile, BiSolidLockAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegisterUserMutation } from "../../redux/api/userApiSlice";
import PasswordStrengthBar from "react-password-strength-bar";
import { Button, Checkbox, Form, Input } from "antd";

export type IRegSignData = {
  email?: string;
  password?: string;
};
type FieldData = {
  email?: string;
  name?: string;
  password?: string;
  remember?: string;
};
export default function Signup() {
  const [regUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const [data, setData] = useState<FieldData>({
    email: "",
    password: "",
    name: "",
  });

  const handlePasswordChange = (password: string) => {
    setData((prevData) => ({ ...prevData, password }));
  };
  const onFinish = async (values: FieldData) => {
    setData(values);
    const user = {
      email: values.email || "",
      password: values.password || "",
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

        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldData>
            className="text-left "
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter a vaild email address!",
              },
            ]}
          >
            <Input className="h-10 rounded-xl" placeholder="@ Your Email" />
          </Form.Item>
          <Form.Item<FieldData>
            className="text-left"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input
              className="h-10 rounded-xl"
              placeholder="Your Name"
              prefix={<BiSmile className="text-[#C1C7D0] " />}
            />
          </Form.Item>

          <Form.Item<FieldData>
            className="text-left"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              onChange={(e) => handlePasswordChange(e.target.value)}
              className="h-10 rounded-xl"
              placeholder="Create Password"
              prefix={<BiSolidLockAlt className="text-[#C1C7D0] " />}
            />
          </Form.Item>
          <PasswordStrengthBar shortScoreWord={true} password={data.password} />

          <Form.Item<FieldData> name="remember" className="text-left my-3">
            <Checkbox className="text-[#B0B7C3]">
              I agree to the Terms & Conditions
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              className=" bg-[#377DFF] w-full h-10 text-lg text-white hover:bg-white"
              type="primary"
              htmlType="submit"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

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
