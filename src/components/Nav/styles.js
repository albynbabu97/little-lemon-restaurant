import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1120px) {
    padding: 0 7rem;
  }

  img {
    width: 180px;
    height: auto;
    flex: 0 1 180px;
    cursor: pointer;
  }

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    gap: 2rem;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  ul li a {
    text-transform: uppercase;
    font-size: 14px;
  }

  .basketIcon {
    max-width: 3.5rem;
  }

  .orderBtn {
    padding: 1rem 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border.radius};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
