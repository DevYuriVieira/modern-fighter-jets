import styled from "styled-components";

export const Container = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;

  width: 100%;
  height: 70px;

  background: rgba(10, 15, 13, 0.9);
  backdrop-filter: blur(12px);

  border-bottom: 1px solid var(--border);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;

  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Logo = styled.h2`
  color: var(--text);
  font-size: 1rem;
  font-weight: 700;

  span {
    color: var(--primary);
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Menu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }

  a {
    color: var(--text-secondary);
    font-weight: 500;
    transition: 0.3s;
  }

  a:hover {
    color: var(--text);
  }
`;