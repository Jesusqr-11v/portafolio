import "./styles.css";

export const Navbar = ({img}) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-object">
          <a href="#top"><span>00</span> <strong>About me</strong></a>
        </li>
        <li className="nav__list-object">
          <a href="#center"><span>01</span> <strong>Project</strong></a>
        </li>
        <li className="nav__list-object">
          <a href="#bottom"><span>02</span> <strong>Contact me</strong></a>
        </li>
      </ul>
    </nav>
  );
};
