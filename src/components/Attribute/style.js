import styled, { css } from "styled-components";

export const AttributeIndicator = styled.div`
  justify-content: center;
  border: 2px solid ${(props) => props.attributeColor};
  width: 25px;
  height: 25px;
  transform: rotate(45deg);
  margin: 3px;
  ${(props) =>
    props.primary &&
    css`
      background: ${(props) => props.attributeColor};
    `}
`;

export const AttributeContainer = styled.div`
  justify-content: center;
  align-items: "center"; /* vertical */
  display: flex;
  flex-direction: row;
`;
export const TextContainer = styled.div`
  align-items: "center";
  display: flex;
  flex-direction: row;
  min-width: 100px;
  padding: 5px 10px 5px 5px;
`;

export const Container = styled.div`
  align-items: "center";
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 10px 5px 5px;
`;
