/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>Navbar</nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <section>Footer</section>
      </footer>
    </>
  );
};

export default Layout;
