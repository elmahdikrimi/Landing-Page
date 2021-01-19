/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../images/logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src={logo} alt="AtoonSoft Agency" width="154" height="28" />
          </a>

          <a role="button" className="navbar-burger" href={"#"}>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>

        <div className="navbar-menu" id="navMenu">
          <div className="navbar-end">
            <a href="#" className="navbar-item">
              Services
            </a>
            <a href="#" className="navbar-item">
              Work
            </a>
            <a href="#" className="navbar-item">
              Company
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
