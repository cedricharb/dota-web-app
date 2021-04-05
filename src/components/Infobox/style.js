import styled, { css } from "styled-components";

export const InfoBoxContainer = styled.div`
  height: 150px;
  width: 150px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  background: grey;
  border: 2px solid red;
  background-image: ${(props) => props.background};
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  justify-content: center;
  padding: 10px;
  overflow: hidden;

  ${(props) =>
    props.highlight &&
    css`
      justify-content: flex-end;
    `}
`;

export const Title = styled.span`
  text-align: center;
  color: white;
  ${(props) =>
    props.highlight &&
    css`
      text-align: left;
      font-weight: bold;
      color: white;
      font-size: 18;
    `}
`;

export const Subtitle = styled.span`
  text-align: left;
  color: white;
  font-size: 12;
`;