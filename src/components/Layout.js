import Head  from "next/head";
import React from "react";
import Header from "../components/Header";
function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Head>
        <title>Alomrane</title>
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
