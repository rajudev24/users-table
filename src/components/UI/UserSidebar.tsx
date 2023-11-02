import { HiMiniRectangleStack } from "react-icons/hi2";
import { PiSquaresFourLight } from "react-icons/pi";
import { FaRegUser, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UserSidebar() {
  return (
    <div>
      <div className="flex items-center my-4 mb-12 ml-12">
        <HiMiniRectangleStack size={24} style={{ color: "#2980BA" }} />
        <span className="font-semibold text-2xl ml-2 text-[#4E5D78]">
          Stack
        </span>
      </div>
      <span className="ml-6 ">PAGES</span>
      <div className="ml-3 mt-2">
        <div className="flex justify-start items-center h-8 hover:bg-[#F0F5FA] rounded-lg p-2">
          <PiSquaresFourLight size={20} className="mr-2" />{" "}
          <Link to="/dashboard" className="mr-2">
            Dashboard
          </Link>
        </div>
        <div className="flex justify-start items-center h-8 my-2 bg-[#F0F5FA] rounded-lg p-2">
          <FaRegUser size={20} className="mr-2" />{" "}
          <Link to="/users">Users</Link>
        </div>
        <div className="flex justify-start items-center h-8 hover:bg-[#F0F5FA] rounded-lg p-2">
          <FaClipboardList size={20} className="mr-2" />{" "}
          <Link to="/">Sales</Link>
        </div>
      </div>
    </div>
  );
}
