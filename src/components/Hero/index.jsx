import f14 from "../../assets/Images/F-14.jpg";

import {
  Container,
  Content,
  TextContent,
  Button,
  ImageContainer,
} from "./style";

function Hero() {
  const handleExploreAircraft = () => {
    document.getElementById("aircraft")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Container id="hero">
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

          <p className="quote">
            "I feel the need... the need for speed."
          </p>

          <p className="quote">
            "It's not the plane, it's the pilot."
          </p>

          <Button onClick={handleExploreAircraft} type="button">
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
