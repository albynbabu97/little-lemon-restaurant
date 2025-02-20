import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem 0;
  margin-top: var(--header-height, 12.8rem);
  gap: 4rem;

  ::before {
    content: "";
    width: 100%;
    height: 34rem;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    margin-top: var(--header-height, 12.8rem);

    @media (max-width: 768px) {
      margin-top: var(--header-height-mobile, 8rem);
    }

    @media (max-width: 860px) {
      height: 40rem;
    }

    @media (max-width: 840px) {
      height: 50rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: var(--header-height-mobile, 8rem);
  }

  @media (max-width: 840px) {
    flex-direction: column;
  }

  @media (max-width: 1120px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
  }

  p {
    max-width: 80%;
    margin: 2rem 0;
    line-height: 1.5;
  }

  button {
    width: fit-content;
  }

  @media (max-width: 840px) {
    align-items: center;
    text-align: center;
  }
`;

export const Image = styled.div`
  img {
    object-fit: cover;
    width: 33rem;
    height: 36.8rem;
    border-radius: ${({ theme }) => theme.border.radius};
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 840px) {
    margin: 0 auto;

    img {
      width: 80vw;
      height: auto;
      max-height: 36.8rem;
    }
  }
`;
