import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

export const Container = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 70px;
  overflow: visible;
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

  button:focus,
  button:active {
    outline: none;
    background: transparent;
  }
`;

export const MenuButton = styled.button`
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  border-radius: 12px;
  background: rgba(18, 26, 23, 0.85);
  border: 1px solid var(--border);

  @media (min-width: 768px) {
    display: none;
  }
`;

const lineStyles = css`
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: var(--text);
  transition: transform 0.25s ease, opacity 0.2s ease;
`;

export const MenuLine = styled.span`
  ${lineStyles}

  ${({ $open, $first }) =>
    $open &&
    $first &&
    css`
      transform: translateY(7px) rotate(45deg);
    `}

  ${({ $open, $middle }) =>
    $open &&
    $middle &&
    css`
      opacity: 0;
    `}

  ${({ $open, $last }) =>
    $open &&
    $last &&
    css`
      transform: translateY(-7px) rotate(-45deg);
    `}
`;

export const MobileBackdrop = styled.button`
  position: fixed;
  inset: 70px 0 0;
  z-index: 997;
  width: 100%;
  border: none;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 82px;
  left: 1rem;
  right: 1rem;
  z-index: 998;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: rgba(12, 18, 15, 0.96);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);

  @media (min-width: 768px) {
    display: none;
  }
`;

const mobileItemStyles = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.95rem 1rem;
  border-radius: 14px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.98rem;
  font-weight: 600;
  transition: 0.2s ease;

  &:hover {
    border-color: var(--primary);
    background: rgba(31, 77, 58, 0.18);
    color: var(--text);
  }
`;

export const MobileLink = styled(Link)`
  ${mobileItemStyles}
`;

export const MobileButton = styled.button`
  ${mobileItemStyles}
`;
