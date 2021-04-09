import React from "react";
import { InfoBoxContainer, Subtitle, Overlay, Title } from "./style";

const InfoBox = (props) => {
  return (
    <InfoBoxContainer background={props.background} highlight={props.highlight}>
      <Overlay highlight={props.highlight}>
        <Title highlight={props.highlight}> {props.title} </Title>
        <Subtitle> {props.subtitle} </Subtitle>
      </Overlay>
    </InfoBoxContainer>
  );
};

export default InfoBox;
