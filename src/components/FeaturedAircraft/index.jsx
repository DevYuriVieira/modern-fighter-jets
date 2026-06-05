import f47 from "../../assets/images/F-47.jpg";

import {
  Container,
  Content,
  ImageContainer,
  Info,
} from "./style";

function FeaturedAircraft() {
  return (
    <Container id="featured">
      <Content>
        <ImageContainer>
          <img src={f47} alt="F-47" />
        </ImageContainer>

        <Info>
          <h4>Featured Aircraft</h4>

          <h2>F-47</h2>

          <p>
            Sixth-generation air dominance platform designed for the future of
            aerial warfare.
          </p>

          <p>
            Represents the next evolution of stealth, networking and combat
            capabilities.
          </p>
        </Info>
      </Content>
    </Container>
  );
}

export default FeaturedAircraft;