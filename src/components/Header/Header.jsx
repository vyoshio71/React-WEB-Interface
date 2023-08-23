import { Link } from "react-router-dom";
import HeaderLogo from "../../img/header-logo.png";
import "./index.scss";

function Header() {
  return (
    <header className="header-container">
      <Link to='/'>
        <img src={HeaderLogo} alt="header-logo" />
      </Link>

      <div className="navbar">
        <div>
          <Link to="/listadeleitura" className="link-navbar">
            Lista de leitura
          </Link>
        </div>
        <div>
          <Link to="/lidos" className="link-navbar">
            Lidos
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
