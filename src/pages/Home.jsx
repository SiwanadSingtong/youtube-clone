import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Contents from "../components/Content/Content";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="fixed w-full">
        <Navbar />
      </div>
      <div className="flex mt-[64px]">
        <div className="flex-2 h-full max-h-[calc(100vh-64px)] fixed overflow-auto">
          <Sidebar />
        </div>
        <div className="flex-1 pl-[233px] min-h-screen h-full w-full">
          <Contents />
        </div>
      </div>
    </div>
  );
}

export default Home;
