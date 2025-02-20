import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: var(--header-height, 12.8rem);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 0;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;

  @media (max-width: 768px) {
    height: var(--header-height-mobile, 8rem);
    padding: 0 3rem;
  }
`;

export const Content = styled.div`
  width: 100%;

  @media (max-width: 1120px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    height: 9rem;
  }
`;
