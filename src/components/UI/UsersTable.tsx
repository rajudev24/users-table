/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useGetUsersQuery } from "../../redux/api/userApiSlice";
import { useState, useEffect } from "react";
import { TableDataType, UsersType } from "../../types";

const columns: ColumnsType<TableDataType> = [
  {
    title: "#ID",
    dataIndex: "id",
  },
  {
    title: "USER",
    dataIndex: "name",
    render: (text, record) => (
      <span>
        <Avatar src={record.avatar} size={30} icon={<UserOutlined />} /> {text}
      </span>
    ),
  },
  {
    title: "EMAIL",
    dataIndex: "email",
  },
  {
    title: "OPTIONS",
    dataIndex: "options",
  },
];

export default function UsersTable() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const { data, isLoading, refetch } = useGetUsersQuery(pagination.current, {
    refetchOnMountOrArgChange: true,
  });

  const handleTableChange = (pagination: any) => {
    setPagination({
      ...pagination,
    });
  };

  useEffect(() => {
    refetch();
  }, [pagination, refetch]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  const users = data
    ? data.data.map((item: UsersType) => ({
        id: item.id,
        name: `${item.first_name} ${item.last_name}`,
        email: item.email,
        avatar: item.avatar,
        options: "...",
      }))
    : [];

  return (
    <div className="mx-4">
      <h1 className="text-2xl font-semibold my-4">Users List</h1>
      <Table
        columns={columns}
        dataSource={users}
        pagination={{
          ...pagination,
          total: data ? data.total : 0,
        }}
        onChange={handleTableChange}
      />
    </div>
  );
}
