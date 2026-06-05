import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
`;

export const AircraftSection = styled.section`
  padding: 5rem 1rem;
`;

export const AircraftContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;

  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;