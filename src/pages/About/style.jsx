import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  padding: 3rem 1rem 6rem;
  background: radial-gradient(
    circle at top,
    rgba(0, 255, 170, 0.04),
    transparent 40%
  );
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    padding: 2.5rem 0;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  margin-bottom: 1rem;
  color: var(--text);
  letter-spacing: -0.02em;
`;

export const HeroSubtitle = styled.p`
  max-width: 780px;
  margin: 0 auto;
  color: var(--text-secondary);
  line-height: 1.9;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 5rem;
  width: 100%;
`;

export const StatCard = styled.div`
  background: linear-gradient(
    145deg,
    var(--surface),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 170, 0.08),
      transparent 70%
    );
    opacity: 0;
    transition: 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: var(--primary);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4);
  }

  &:hover::before {
    opacity: 1;
  }

  h3 {
    color: var(--primary);
    font-size: 2.4rem;
    margin-bottom: 0.4rem;
  }

  span {
    color: var(--text-secondary);
  }
`;

export const SectionBlock = styled.section`
  margin-bottom: 4.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  color: var(--text);
  text-align: center;
  font-size: 2rem;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--text);
  font-size: 2rem;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 2px;
    margin: 10px auto 0;
    background: var(--primary);
    opacity: 0.7;
  }
`;

export const Text = styled.p`
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 1.4rem;
  font-size: 1.05rem;
  max-width: 900px;
  text-align: center;
`;

export const TechList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 0;
  list-style: none;
  color: var(--text-secondary);
  line-height: 1.8;
  align-items: center;

  li {
    transition: 0.2s ease;
  }

  li:hover {
    color: var(--text);
    transform: translateX(4px);
  }
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
`;

export const TechCard = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--border);
  margin: 4rem 0;
  opacity: 0.6;
`;