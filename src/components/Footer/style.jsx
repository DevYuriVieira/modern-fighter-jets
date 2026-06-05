import styled from "styled-components";

export const Container = styled.footer`
  border-top: 1px solid var(--border);
  background: var(--surface);

  padding: 2rem 1rem;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  text-align: center;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.8;
  }
`;