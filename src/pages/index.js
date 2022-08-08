import React from "react";
import Home from "../components/Home";
import Head from "next/head";

function index({ grades }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFFFFF"
      }}
    >
      <Home />
    </div>
  );
}

export default index;
