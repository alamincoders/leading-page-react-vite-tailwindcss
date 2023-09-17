/* eslint-disable react/prop-types */

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav>Navbar</nav>
      </header>

      <main>{children}</main>

      <footer>
        <section>Footer</section>
      </footer>
    </>
  );
};

export default Layout;
