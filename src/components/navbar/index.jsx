import "./styles.css";

export const Navbar = ({img}) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-object">
          <a href="#top"><span>00</span> <strong>About</strong></a>
        </li>
        <li className="nav__list-object">
          <a href="#center"><span>01</span> <strong>Projects</strong></a>
        </li>
        <li className="nav__list-object">
          <a href="#bottom"><span>02</span> <strong>Contact</strong></a>
        </li>
      </ul>
    </nav>
  );
};
