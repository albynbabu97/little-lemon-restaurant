import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  min-height: 65.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  gap: 2rem;

  @media (max-width: 966px) {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0;
  }

  @media (max-width: 1120px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  @media (max-width: 966px) {
    width: 100%;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    width: fit-content;
  }

  h2 {
    color: ${({ theme }) => theme.colors.tertiary};
    width: fit-content;
  }

  p {
    max-width: 28rem;
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 22px;
  }

  @media (max-width: 966px) {
    align-items: center;
    text-align: center;
  }
`;

export const Image = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;

  img {
    object-fit: cover;
    width: 24.7rem;
    height: 33.8rem;
  }

  img:first-of-type {
    left: -0rem;
    top: 8rem;
    z-index: 2;
    position: absolute;
  }

  @media (max-width: 996px) {
    display: none;
  }
`;
