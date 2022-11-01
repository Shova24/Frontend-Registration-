import React, { useEffect, useState } from "react";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

export default function AdminLayout({ children }) {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Header style={{ color: "white", alignItems: "center", textAlign: "center" }}>User Registration/Login</Header>
        <Content
          style={{
            padding: "0 50px",
            alignItems: "center",
          }}>
          {children}
        </Content>
      </Layout>
    </>
  );
}
