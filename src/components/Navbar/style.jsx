import { Link } from "react-router-dom";

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

export const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 100%;

  transition: 0.3s ease;

  img {
    display: block;
    width: auto;
    height: 48px;
    max-width: 220px;
    object-fit: contain;
  }

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  @media (min-width: 768px) {
    img {
      height: 56px;
    }
  }
`;

export const Menu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2.2rem;
    align-items: center;
  }

  a,
  button {
    position: relative;

    color: var(--text-secondary);
    font-weight: 500;
    font-size: 0.95rem;

    text-decoration: none;
    cursor: pointer;

    background: transparent;
    border: none;
    padding: 0;

    transition: 0.3s ease;
  }

  a::after,
  button::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;

    width: 0%;
    height: 2px;

    background: var(--primary);
    transition: 0.3s ease;
  }

  a:hover,
  button:hover {
    color: var(--text);
    transform: translateY(-1px);
  }

  a:hover::after,
  button:hover::after {
    width: 100%;
  }

  /* 🔥 REMOVE O BRANCO DO FOCO/CLICK */
  button:focus,
  button:active {
    outline: none;
    background: transparent;
  }
`;
