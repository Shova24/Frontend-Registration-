import React from "react";
import { Layout } from "antd";

const { Header, Content } = Layout;

export default function BaseLayout({ children }) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ color: "white", alignItems: "center", textAlign: "center", backgroundColor: "teal" }}>Admin Dashboard</Header>
      <Content
        style={{
          padding: "50px 50px",
          alignItems: "center",
        }}>
        {children}
      </Content>
    </Layout>
  );
}
