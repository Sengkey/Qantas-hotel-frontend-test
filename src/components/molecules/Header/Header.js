import logo from "./qantas-logo.png";
import style from "./Header.module.scss";

const Header = () => (
  <header>
    <a href="https://www.qantas.com/au/en.html" target="_blank" rel="noreferrer" ><img src={logo} className={style.logo} alt="Qantas" /></a>
  </header>
);

export default Header;