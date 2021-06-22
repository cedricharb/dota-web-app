import React from "react";
import Attribute from "../../components/Attribute";
import InfoBox from "../../components/Infobox";
import Spinner from "../../components/Spinner";
import {
  ImageContainer,
  Image,
  InfoBoxContainer,
  StatsContainer,
  StatText,
  ScreenContainer,
  SpinnerContainer,
} from "./styles.js";

const HeroInfo = (props) => {
  console.log("loading: ", props.loading);
  const stats = props.stats;
  const infoBoxes = stats.map((infoBox) => (
    <InfoBox
      key={infoBox.id}
      background={infoBox.background}
      title={infoBox.title}
      subtitle={infoBox.stat}
    />
  ));

  return (
    <ScreenContainer>
      {props.loading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <div>
          <ImageContainer>
            <Image
              src={`https://api.opendota.com${props.basicInfo.image}`}
              alt="hero"
            />
            <h3>{props.basicInfo.name}</h3>
            <span>{props.basicInfo.roles}</span>
          </ImageContainer>
          <Attribute
            attribute={props.attributes[0].name}
            stat={props.attributes[0].stat}
            color={props.attributes[0].color}
            primary={props.attributes[0].primary}
          />
          <Attribute
            attribute={props.attributes[1].name}
            stat={props.attributes[1].stat}
            color={props.attributes[1].color}
            primary={props.attributes[1].primary}
          />
          <Attribute
            attribute={props.attributes[2].name}
            stat={props.attributes[2].stat}
            color={props.attributes[2].color}
            primary={props.attributes[2].primary}
          />
          <StatsContainer>
            <StatText> Stats </StatText>
            <InfoBoxContainer>{infoBoxes}</InfoBoxContainer>
          </StatsContainer>
        </div>
      )}
    </ScreenContainer>
  );
};

export default HeroInfo;
