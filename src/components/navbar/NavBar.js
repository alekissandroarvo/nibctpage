//import { React } from "react";
import "./navbar.css";
import logo from "../../images/logo.png";

function NavBar() {
  return (
    <div className="navBar">
      <nav>
        <img className="nibLogo" src={logo} alt="logo nib" />
        <h1 className="h1">Nova Igreja Batista de Curitiba</h1>
        <p className="p">Firmes na Palavra e no Amor</p>
      </nav>
    </div>
  );
}
export default NavBar;
