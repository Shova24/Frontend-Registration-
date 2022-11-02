import React, { useContext, useEffect } from "react";
import { Table } from "antd";
import BaseLayout from "../layout/BaseLayout";
import { AppRootContext } from "../utils/AppRootContext";

export default function Dashboard() {
  const { user, getUsers } = useContext(AppRootContext);
  useEffect(() => {
    getUsers();
  }, []);
  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
  return (
    <BaseLayout>
      <Table dataSource={user} columns={columns} rowKey={(record) => record.id} />
    </BaseLayout>
  );
}
