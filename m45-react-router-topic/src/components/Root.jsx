import React from "react";
import Header from "./header/Header";
import { Outlet, useNavigation } from "react-router";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div style={{ border: "2px solid white" }}>
      <Header></Header>
      <div style={{ display: "flex", gap: "10px",border: '2px solid green',margin: '5px',padding: "5px" }}>
        <Sidebar></Sidebar>
        {isNavigating && <span>Waiting for message...</span>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
