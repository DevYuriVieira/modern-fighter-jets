import styled from "styled-components";

export const Container = styled.section`
  min-height: calc(100vh - 70px);

  padding: 2rem 1rem;
  scroll-margin-top: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TextContent = styled.div`
  flex: 1;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .quote {
    color: var(--primary-hover);
    font-style: italic;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4rem;
    }
  }
`;

export const Button = styled.button`
  background: var(--primary);
  color: white;

  padding: 1rem 2rem;

  border-radius: 8px;

  transition: 0.3s;

  &:hover {
    background: var(--primary-hover);
  }
`;

export const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;
