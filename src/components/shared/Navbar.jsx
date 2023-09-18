import logo from "../../assets/images/nav_logo.png";
const Navbar = () => {
  return (
    <nav className="text-white">
      <div>
        <ul>
          <div>
            <li className="">
              <img src={logo} alt="" />
            </li>
          </div>
          <div>
            <li>
              <span></span>
              <span>Home</span>
            </li>
            <li>
              <span></span>
              <span>About</span>
            </li>
            <li>
              <span></span>
              <span>Contact</span>
            </li>
          </div>
          <div>
            <li></li>
            <li></li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
