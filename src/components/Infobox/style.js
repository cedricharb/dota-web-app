import styled, { css } from "styled-components";

export const InfoBoxContainer = styled.div`
  height: 150px;
  width: 150px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  background: grey;
  border: 2px solid #eb3d06;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  ${(props) =>
    props.highlight &&
    css`
      align-items: flex-end;
    `}
`;

export const Overlay = styled.div`
  background-image: linear-gradient(
    rgb(0 0 0 / 0%),
    rgb(0 0 0 / 20%) 10%,
    rgb(0 0 0 / 90%) 100%
  );
  flex: 1;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
  align-items: center
    ${(props) =>
      props.highlight &&
      css`
        justify-content: flex-end;
        align-items: flex-end;
      `};
`;

export const Title = styled.p`
  display: block;
  text-align: center;
  color: white;
  ${(props) =>
    props.highlight &&
    css`
      text-align: left;
      font-weight: bold;
      color: white;
      font-size: 18px;
    `}
`;

export const Subtitle = styled.p`
  text-align: center;
  color: white;
  font-size: 12;

  ${(props) =>
    props.highlight &&
    css`
      text-align: left;
    `}
`;
