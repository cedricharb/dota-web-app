import React from "react";
import Attribute from "../../components/Attribute/index.jsx";
import {
  ImageContainer,
  Image,
  InfoBoxContainer,
  StatsContainer,
  StatText,
} from "./styles.js";

const armorBG = {
  uri:
    "https://previews.123rf.com/images/andreykuzmin/andreykuzmin1512/andreykuzmin151200001/49591664-grunge-metal-scales-armor-background.jpg",
};
const movementSpeedBG = {
  uri:
    "https://www.epicpath.org/images/thumb/3/3b/Feet_Slot_1.jpg/450px-Feet_Slot_1.jpg",
};
const attackSpeedBG = {
  uri:
    "https://www.skinwallet.com/dota-2/wp-content/uploads/sites/4/2020/01/Cosmetic_icon_Crimson_Edge_of_the_Lost_Order-1.png",
};
const attackRangeBG = {
  uri:
    "https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/570d0779-1b07-4af7-baad-3cda71f67122",
};
const baseHealthBG = {
  uri:
    "https://i.pinimg.com/564x/7f/65/5d/7f655de1f84a5cf7f4cfbab6b999d979.jpg",
};
const baseManaBG = require("../../images/baseManaBG.jpg");

const HeroInfo = (props) => {
  return (
    <div>
      <ImageContainer>
        <Image
          src="https://api.opendota.com/apps/dota2/images/heroes/antimage_full.png?"
          alt="hero"
        />
        <text> Roles: Carry, smthg, smthg else </text>
      </ImageContainer>
      <Attribute attribute="strength" stat="2" color="red" />
      <Attribute attribute="intelligence" stat="2" color="blue" />
      <Attribute attribute="agility" stat="2" primary color="green" />
      <StatsContainer>
        <StatText> Stats </StatText>
        <InfoBoxContainer></InfoBoxContainer>
      </StatsContainer>
    </div>
  );
};

export default HeroInfo;
