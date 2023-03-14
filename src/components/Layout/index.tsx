import { FloatButton } from "antd";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatButton.BackTop />
    </>
  );
};

export default Layout;