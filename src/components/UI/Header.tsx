import { Select } from "antd";
import { HiMiniRectangleStack } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="flex justify-between mx-12 items-center mt-4">
      <div className="flex items-center">
        <HiMiniRectangleStack size={24} style={{ color: "#2980BA" }} />
        <span className="font-semibold text-2xl ml-2 text-[#4E5D78]">
          Stack
        </span>
      </div>
      <Select
        defaultValue="uk"
        style={{ width: 125 }}
        //   onChange={handleChange}
        options={[
          { value: "uk", label: "English (UK)" },
          { value: "us", label: "English (US)" },
        ]}
      />
    </div>
  );
}
