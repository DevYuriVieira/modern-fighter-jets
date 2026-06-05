import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/Images/logo.jpeg";

import {
  Container,
  Content,
  Logo,
  Menu,
  MenuButton,
  MenuLine,
  MobileBackdrop,
  MobileButton,
  MobileLink,
  MobileMenu,
} from "./style";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToAircraft = () => {
    document.getElementById("aircraft")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleHomeNavigation = (event) => {
    event.preventDefault();
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scrollToHero, 100);
      return;
    }

    scrollToHero();
  };

  const handleAircraftNavigation = () => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(scrollToAircraft, 100);
      return;
    }

    scrollToAircraft();
  };

  const handleAboutNavigation = (event) => {
    event.preventDefault();
    closeMenu();

    if (location.pathname !== "/about") {
      navigate("/about");
      window.setTimeout(scrollToTop, 100);
      return;
    }

    scrollToTop();
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

          <button onClick={handleAircraftNavigation}>Aircraft</button>

          <Link to="/about" onClick={handleAboutNavigation}>
            About
          </Link>
        </Menu>

        <MenuButton
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <MenuLine $open={isMenuOpen} $first />
          <MenuLine $open={isMenuOpen} $middle />
          <MenuLine $open={isMenuOpen} $last />
        </MenuButton>
      </Content>

      {isMenuOpen && <MobileBackdrop type="button" onClick={closeMenu} />}

      {isMenuOpen && (
        <MobileMenu>
          <MobileLink to="/" onClick={handleHomeNavigation}>
            Home
          </MobileLink>

          <MobileButton type="button" onClick={handleAircraftNavigation}>
            Aircraft
          </MobileButton>

          <MobileLink to="/about" onClick={handleAboutNavigation}>
            About
          </MobileLink>
        </MobileMenu>
      )}
    </Container>
  );
}

export default Navbar;
