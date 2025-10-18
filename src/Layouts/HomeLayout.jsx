import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      {/* ----------------------Head Section-------------------- */}
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
      </header>
      {/* ------------------------Nav Section--------------------------- */}

      <nav className="w-11/12 mx-auto my-3">
        <Navbar></Navbar>
      </nav>

      {/* ------------------------------------------------- */}

      <main className="w-11/12 mx-auto my-3    grid grid-cols-12">
        {/* ------------------------Left Side------------------ */}
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>

        {/* ---------------------Main Side---------------------------- */}

        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        {/* -------------------------Right side--------------------------------- */}
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
