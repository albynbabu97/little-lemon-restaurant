import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  border-radius: ${({ theme }) => theme.border.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 1.2rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  :active {
    box-shadow: inset 0px 5px 4px rgba(0, 0, 0, 0.25);
  }
`;
