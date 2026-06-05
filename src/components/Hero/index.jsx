import f14 from "../../assets/images/F-14.jpg";

import {
  Container,
  Content,
  TextContent,
  Button,
  ImageContainer,
} from "./style";

function Hero() {
  return (
    <Container id="home">
      <Content>
        <TextContent>
          <h1>Modern Fighter Jets</h1>

          <p>
            Past. Present. Future.
          </p>

          <p>
            From the legendary F-14 Tomcat to the next-generation F-47 air
            dominance platform.
          </p>

          <Button>
            Explore Aircraft
          </Button>
        </TextContent>

        <ImageContainer>
          <img src={f14} alt="F-14 Tomcat" />
        </ImageContainer>
      </Content>
    </Container>
  );
}

export default Hero;