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

      <main>
        {/* ------------------------Left Side------------------ */}
        <aside>
          <LeftAside></LeftAside>
        </aside>

        {/* ---------------------Main Side---------------------------- */}

        <section className="main">
          <Outlet></Outlet>
        </section>
        {/* -------------------------Right side--------------------------------- */}
        <aside>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
