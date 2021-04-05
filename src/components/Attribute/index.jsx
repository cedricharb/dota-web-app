import React from "react";
import {
  AttributeContainer,
  AttributeIndicator,
  Container,
  TextContainer,
} from "./style";

const Attribute = (props) => {
  const color = props.color;

  return (
    <AttributeContainer>
      <Container>
        <AttributeIndicator attributeColor={color} primary={props.primary} />
      </Container>
      <TextContainer>
        <span> {props.attribute} </span>
      </TextContainer>
      <Container>
        <span> {props.stat} </span>
      </Container>
    </AttributeContainer>
  );
};

export default Attribute;
