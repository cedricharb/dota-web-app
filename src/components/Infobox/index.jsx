import React from "react";
import { InfoBoxContainer, Subtitle, Overlay, Title } from "./style";
import { Link } from "react-router-dom";

const InfoBox = (props) => {
  if (props.highlight) {
    return (
      <Link to={`/heroes/${props.id}`}>
        <InfoBoxContainer
          background={props.background}
          highlight={props.highlight}
        >
          <Overlay highlight={props.highlight}>
            <Title highlight={props.highlight}> {props.title} </Title>
            <Subtitle> {props.subtitle} </Subtitle>
          </Overlay>
        </InfoBoxContainer>
      </Link>
    );
  } else {
    return (
      <InfoBoxContainer
        background={props.background}
        highlight={props.highlight}
      >
        <Overlay highlight={props.highlight}>
          <Title highlight={props.highlight}> {props.title} </Title>
          <Subtitle> {props.subtitle} </Subtitle>
        </Overlay>
      </InfoBoxContainer>
    );
  }
};

export default InfoBox;
