import styled from "styled-components";

export const Card = styled.article`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: 0.3s ease;
  box-shadow:
    0 0 0 rgba(0, 0, 0, 0),
    0 0 20px rgba(31, 77, 58, 0.08);

  &:hover {
    transform: translateY(-8px);
    border-color: var(--primary);
    box-shadow:
      0 0 30px rgba(31, 77, 58, 0.35),
      0 0 60px rgba(31, 77, 58, 0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 1.5rem;
`;

export const Header = styled.div`
  margin-bottom: 1rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-secondary);
  }
`;

export const Badge = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(31, 77, 58, 0.25);
  border: 1px solid var(--primary);
  color: var(--text);
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  flex: 1;
  padding: 0.8rem;
  border-radius: 8px;
  background: var(--primary);
  color: white;
  transition: 0.3s;

  &:hover {
    background: var(--primary-hover);
  }
`;

export const FavoriteButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.6rem;
  color: ${({ $favorite }) =>
    $favorite ? "#FFD700" : "#6B7280"};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.15);
  }
`;

export const Details = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);

  p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 0.75rem;
  }

  strong {
    color: white;
  }
`;