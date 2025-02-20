import { Container } from "./styles";
import logoImg from "../../assets/Logo.svg";
import basketImg from "../../assets/basket.svg";
import { HashLink } from "react-router-hash-link";

const Nav = (props) => {
  return (
    <Container {...props}>
      <div className="logo-container">
        <a href="/">
          <img src={logoImg} alt="Little Lemon Logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <HashLink to="/#about">About</HashLink>
        </li>
        <li>
          <HashLink to="/#menu">Menu</HashLink>
        </li>
        <li>
          <a href="/bookings">Reservations</a>
        </li>
        <li className="orderBtn">
          <a
            role="button"
            href="/order"
            aria-label="Order Online"
            style={{ pointerEvents: "none" }}
          >
            Order Online
          </a>
        </li>
        <li>
          <img className="basketIcon" src={basketImg} alt="Basket" />
        </li>
      </ul>
    </Container>
  );
};

export default Nav;
