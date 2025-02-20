import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: auto;
  min-height: 70.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.3rem;
  margin-top: 12.8rem;

  @media (max-width: 1120px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    margin-top: 9rem;
  }
`;

export const Top = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 840px) {
    flex-direction: column;

    h1 {
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  display: grid;
  width: 100%;
  max-width: 500px;
  gap: 14px;
  font-size: ${({ theme }) => theme.font.size.large};

  > input,
  select,
  textarea {
    font-size: ${({ theme }) => theme.font.size.medium};
    width: 100%;
    border-radius: 0.5rem;
    outline: none;
    padding: 1.2rem 2rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    font-size: 1.6rem;
    background-color: #edefee;
    border: none;
  }

  > input[type="submit"] {
    width: 100%;
    height: 5rem;
    border-radius: ${({ theme }) => theme.border.radius};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.font.size.medium};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    padding: 0 1.3rem;

    :active {
      box-shadow: inset 0px 5px 4px rgba(0, 0, 0, 0.25);
    }
  }

  > select option {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.weight.extrabold};
    background-color: #edefee;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.primary};

    :checked,
    :hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary} !important;
    }
  }
`;

export const FormMessageError = styled.span`
  color: red;
  font-size: 1.4rem;
`;
