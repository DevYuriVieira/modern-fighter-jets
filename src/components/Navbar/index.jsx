import { Container, Content, Logo, Menu } from "./style";

function Navbar() {
  return (
    <Container>
      <Content>
        <Logo>
          MODERN <span>FIGHTER JETS</span>
        </Logo>

        <Menu>
          <a href="#home">Home</a>
          <a href="#featured">Featured</a>
          <a href="#aircraft">Aircraft</a>
          <a href="#about">About</a>
        </Menu>
      </Content>
    </Container>
  );
}

export default Navbar;