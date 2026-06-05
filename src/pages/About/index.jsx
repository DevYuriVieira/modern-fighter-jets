import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  Container,
  Content,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  StatsContainer,
  StatCard,
  Text,
  SectionBlock,
  SectionTitle,
  TechList,
  TechGrid,
  TechCard,
} from "./style";

function About() {
  return (
    <>
      <Navbar />

      <Container>
        <Content>

          <HeroSection>
            <HeroTitle>
              Modern Fighter Jets
            </HeroTitle>

            <HeroSubtitle>
              A React-based interactive platform showcasing
              next-generation military aircraft and modern air combat technology.
            </HeroSubtitle>
          </HeroSection>

          <StatsContainer>
            <StatCard>
              <h3>11</h3>
              <span>Aircraft Featured</span>
            </StatCard>

            <StatCard>
              <h3>5th</h3>
              <span>Generation Fighters</span>
            </StatCard>

            <StatCard>
              <h3>100%</h3>
              <span>Responsive UI</span>
            </StatCard>

            <StatCard>
              <h3>React</h3>
              <span>Powered App</span>
            </StatCard>
          </StatsContainer>

          <SectionBlock>
            <SectionTitle>Project Overview</SectionTitle>

            <Text>
              Modern Fighter Jets is an interactive web application designed to explore some of the most advanced combat aircraft in modern military aviation.
            </Text>

            <Text>
              The project features aircraft such as the F-22 Raptor, F-35 Lightning II, F-15EX Eagle II, F/A-18 Super Hornet, Su-57 Felon, J-20 Mighty Dragon, Rafale, Eurofighter Typhoon, MiG-35 and Gripen E.
            </Text>

            <Text>
              Each aircraft includes detailed specifications, operational roles and historical context, allowing users to understand the evolution of air superiority technology.
            </Text>
          </SectionBlock>

          <SectionBlock>
            <SectionTitle>Development Focus</SectionTitle>

            <Text>
              This project was built as a React learning experience focused on component architecture, reusable UI patterns and state-driven interfaces.
            </Text>

            <Text>
              Features like favoriting aircraft, dynamic rendering and responsive layout demonstrate practical frontend development concepts used in real applications.
            </Text>

            <Text>
              A highlight of the project is the Featured Aircraft section, centered on the F-47 concept representing next-generation air dominance design.
            </Text>
          </SectionBlock>

          <SectionBlock>
            <SectionTitle>Project Objectives</SectionTitle>

            <TechList>
              <li>Build reusable React components</li>
              <li>Work with props and dynamic rendering</li>
              <li>Apply state management using useState</li>
              <li>Create responsive UI layouts</li>
              <li>Use Styled Components effectively</li>
              <li>Implement client-side routing</li>
              <li>Improve interactivity and UX</li>
            </TechList>
          </SectionBlock>

          <SectionBlock>
            <SectionTitle>Technologies Used</SectionTitle>

            <TechGrid>
              <TechCard>React</TechCard>
              <TechCard>JavaScript ES6+</TechCard>
              <TechCard>Vite</TechCard>
              <TechCard>Styled Components</TechCard>
              <TechCard>React Router DOM</TechCard>
              <TechCard>HTML5</TechCard>
              <TechCard>CSS3</TechCard>
              <TechCard>Responsive Design</TechCard>
            </TechGrid>
          </SectionBlock>

        </Content>
      </Container>

      <Footer />
    </>
  );
}

export default About;