import styled from "styled-components";

export const Image = styled.img`
  border-radius: 10px;
  overflow: hidden;
  max-height: 150px;
  object-fit: cover;
`;

export const ImageContainer = styled.div`
  justify-content: center;
  align-items: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

export const StatsContainer = styled.div`
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StatText = styled.span`
  text-align: center;
`;

export const InfoBoxContainer = styled.div`
  max-width: 510px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
`;

export const ScreenContainer = styled.div`
  background-color: #161b22;
  min-height: 100vh;
`;

export const SpinnerContainer = styled.div`
  background-color: #161b22;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
