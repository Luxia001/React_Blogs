import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

export function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/blogs">blogs</Link>
      <Link to="/about">about</Link>
    </nav>
  );
}
