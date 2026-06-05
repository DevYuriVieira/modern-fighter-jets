import { useState } from "react";

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
  FilterContainer,
  FilterButton,
} from "./style";

function Home() {
  const [filter, setFilter] = useState("all");

  const filteredFighters = fighters.filter((fighter) => {
    if (filter === "all") return true;
    return fighter.generation === filter;
  });

  return (
    <Container>
      <Navbar />

      <Hero />

      <section id="featured">
        <FeaturedAircraft />
      </section>

      <AircraftSection id="aircraft">
        <AircraftContainer>
          <SectionTitle>Combat Aircraft Database</SectionTitle>

          <FilterContainer>
            <FilterButton
              $active={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All
            </FilterButton>

            <FilterButton
              $active={filter === "4.5 Generation"}
              onClick={() => setFilter("4.5 Generation")}
            >
              4.5 Gen
            </FilterButton>

            <FilterButton
              $active={filter === "5th Generation"}
              onClick={() => setFilter("5th Generation")}
            >
              5th Gen
            </FilterButton>
          </FilterContainer>

          <Grid>
            {filteredFighters.map((fighter) => (
              <FighterCard key={fighter.id} fighter={fighter} />
            ))}
          </Grid>
        </AircraftContainer>
      </AircraftSection>

      <Footer />
    </Container>
  );
}

export default Home;
