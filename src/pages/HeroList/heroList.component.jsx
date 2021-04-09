import React from "react";
import InfoBox from "../../components/Infobox";
import Spinner from "../../components/Spinner";
import { InfoBoxContainer, ListContainer } from "./style";

const HeroListComponent = (props) => {
  const heroes = props.heroList;
  const mappedHeroes = heroes.map((hero) => (
    <InfoBox
      key={hero.id}
      id={hero.id}
      highlight
      background={`url("https://api.opendota.com${hero.img}")`}
      title={hero.localized_name}
      subtitle={hero.roles.slice(0, 2).join(", ")}
    />
  ));
  return (
    <ListContainer>
      {props.Loading ? (
        <Spinner />
      ) : (
        <InfoBoxContainer>{mappedHeroes}</InfoBoxContainer>
      )}
    </ListContainer>
  );
};

export default HeroListComponent;
