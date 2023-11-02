import { Input, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Search } = Input;
import { GrNotification } from "react-icons/gr";

export default function UserHeader() {
  return (
    <div className="flex justify-between items-center my-4">
      <Search
        placeholder="Search"
        style={{ width: 400, backgroundColor: "#F0F5FA" }}
      />
      <div className="flex justify-between items-center  ">
        <GrNotification size={20} className="mr-8" />
        <Avatar src="./img/google.png" size={40} icon={<UserOutlined />} />
      </div>
    </div>
  );
}
