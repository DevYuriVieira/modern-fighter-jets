import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 1rem;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  background: var(--surface);

  border: 1px solid var(--border);
  border-radius: 16px;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  flex: 1;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 1rem;
  }

  h4 {
    color: var(--primary);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.8;
  }
`;