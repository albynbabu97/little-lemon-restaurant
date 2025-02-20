import styled from "styled-components";

export const Container = styled.footer`
  padding: 4rem 0;
  width: 100%;
  display: flex;
  height: 44vh;
  flex-direction: column;
  gap: 8rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.highlight_dark};

  @media (max-width: 700px) {
    height: 72rem;
  }
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1120px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Copyright = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  padding: 2rem 0;

  a {
    text-decoration: underline;
    line-height: 150%;
  }
`;

export const ImageContainer = styled.div`
  flex: 0 1 20%;
  position: relative;
  overflow: hidden;
  height: 100%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Column = styled.div`
  display: flex;
  flex: 0 1 20%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

  h4 {
    font-size: ${({ theme }) => theme.font.size.medium};
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.2rem;

    li {
      list-style: none;
      font-size: ${({ theme }) => theme.font.size.small};
    }
  }
`;

export const Address = styled.address`
  font-size: ${({ theme }) => theme.font.size.small};
  line-height: 24px;
`;

export const SocialMedia = styled.ul`
  display: flex;
  flex-direction: row !important;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

  li {
    list-style: none;
    font-size: ${({ theme }) => theme.font.size.small};
  }
`;
