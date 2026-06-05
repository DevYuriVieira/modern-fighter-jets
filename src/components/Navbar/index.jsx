import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  Content,
  Logo,
  Menu,
} from "./style";

function Navbar() {
  const navigate = useNavigate();

  const handleAircraft = () => {
    if (window.location.pathname !== "/") {
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
        <Logo>
          <Link to="/">
            MODERN <span>FIGHTER JETS</span>
          </Link>
        </Logo>

        <Menu>
          <Link to="/">Home</Link>

          <button onClick={handleAircraft}>
            Aircraft
          </button>

          <Link to="/about">About</Link>
        </Menu>
      </Content>
    </Container>
  );
}

export default Navbar;