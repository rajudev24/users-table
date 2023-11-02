import { Layout, Space } from "antd";
import UserSidebar from "../UI/UserSidebar";
import UserHeader from "../UI/UserHeader";
import UsersTable from "../UI/UsersTable";

const { Header, Sider, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#B0B7C3",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#FFFFFF",
};

const contentStyle: React.CSSProperties = {
  color: "#B0B7C3",
  backgroundColor: "#FFFFFF",
};
const siderStyle: React.CSSProperties = {
  color: "#B0B7C3",
  backgroundColor: "#FFFFFF",
};

export default function UsersLayout() {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Sider style={siderStyle} className="border-r-2">
          <UserSidebar />
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <UserHeader />
          </Header>
          <Content style={contentStyle} className="h-screen">
            <UsersTable />
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
}
