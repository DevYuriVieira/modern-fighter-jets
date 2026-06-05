import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/Images/logo.jpeg";

import {
  Container,
  Content,
  Logo,
  Menu,
} from "./style";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeNavigation = (event) => {
    event.preventDefault();

    const hero = () =>
      document.getElementById("hero")?.scrollIntoView({
        behavior: "smooth",
      });

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(hero, 100);
      return;
    }

    hero();
  };

  const handleAircraft = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("aircraft")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById("aircraft")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Container>
      <Content>
        <Logo
          to="/"
          onClick={handleHomeNavigation}
          aria-label="Modern Fighter Jets home"
        >
          <img src={logo} alt="Modern Fighter Jets logo" />
        </Logo>

        <Menu>
          <Link to="/" onClick={handleHomeNavigation}>
            Home
          </Link>

          <button onClick={handleAircraft}>Aircraft</button>

          <Link to="/about">About</Link>
        </Menu>
      </Content>
    </Container>
  );
}

export default Navbar;
