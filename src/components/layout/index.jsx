/* eslint-disable react/prop-types */
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      <header>
        <nav>Navbar</nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <section>Footer</section>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
