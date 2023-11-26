import { BiLogoApple, BiSolidLockAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginUserMutation } from "../../redux/api/userApiSlice";

type FieldData = {
  email?: string;
  password?: string;
  remember?: string;
};
export default function SignIn() {
  const [logUser] = useLoginUserMutation();
  const navigate = useNavigate();

  const onFinish = async (values: FieldData) => {
    const user = {
      email: values.email || "",
      password: values.password || "",
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
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldData>
            className=" text-left"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input className="h-10 rounded-xl" placeholder="@ Your Email" />
          </Form.Item>

          <Form.Item<FieldData>
            className=" mb-2 text-left"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              className="h-10 rounded-xl"
              placeholder="Create Password"
              prefix={<BiSolidLockAlt className="text-[#C1C7D0] " />}
            />
          </Form.Item>

          <Form.Item<FieldData> name="remember" className="text-left ">
            <Checkbox className="text-[#B0B7C3]"> Remember Me</Checkbox>
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
