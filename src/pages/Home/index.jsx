import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FeaturedAircraft from "../../components/FeaturedAircraft";
import FighterCard from "../../components/FighterCard";
import Footer from "../../components/Footer";

import { fighters } from "../../data/fighters";

import {
  Container,
  AircraftSection,
  AircraftContainer,
  Grid,
  SectionTitle,
} from "./style";

function Home() {
  return (
    <Container>
      <Navbar />

      <Hero />

      <FeaturedAircraft />

      <AircraftSection id="aircraft">
        <AircraftContainer>
          <SectionTitle>
            Combat Aircraft Database
          </SectionTitle>

          <Grid>
            {fighters.map((fighter) => (
              <FighterCard
                key={fighter.id}
                fighter={fighter}
              />
            ))}
          </Grid>
        </AircraftContainer>
      </AircraftSection>

      <Footer />
    </Container>
  );
}

export default Home;