import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 59rem;
  background-color: rgba(251, 218, 187, 0.3);
  padding: 4rem 0;
`;

export const InnerContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.3rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  width: 100%;
  height: auto;
  text-align: center;
`;

export const Cards = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 840px) {
    flex-wrap: wrap;
  }

  @media (max-width: 606px) {
    align-items: center;
    flex-direction: column;
  }
`;
