// import { useSelector } from "react-redux";

// const loading = useSelector((store) => store.list.loading);

const armorBG =
  "https://previews.123rf.com/images/andreykuzmin/andreykuzmin1512/andreykuzmin151200001/49591664-grunge-metal-scales-armor-background.jpg";
const movementSpeedBG =
  "https://www.epicpath.org/images/thumb/3/3b/Feet_Slot_1.jpg/450px-Feet_Slot_1.jpg";
const attackSpeedBG =
  "https://www.skinwallet.com/dota-2/wp-content/uploads/sites/4/2020/01/Cosmetic_icon_Crimson_Edge_of_the_Lost_Order-1.png";
const attackRangeBG =
  "https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/570d0779-1b07-4af7-baad-3cda71f67122";
const baseHealthBG =
  "https://i.pinimg.com/564x/7f/65/5d/7f655de1f84a5cf7f4cfbab6b999d979.jpg";

export const getAttributes = (heroStats) => {
  if (!heroStats) return [];
  return [
    {
      color: "#eb3d06",
      name: "Strength",
      stat: heroStats.base_str,
      primary: heroStats.primary_attr === "str",
    },
    {
      color: "#06b6c5",
      name: "Intelligence",
      stat: heroStats.base_int,
      primary: heroStats.primary_attr === "int",
    },
    {
      color: "#25be2d",
      name: "Agility",
      stat: heroStats.base_agi,
      primary: heroStats.primary_attr === "agi",
    },
  ];
};

export const getBasicInfo = (heroStats) => {
  if (!heroStats) return {};
  return {
    image: heroStats.img,
    name: heroStats.localized_name,
    roles: `Roles: ${heroStats.roles}`,
  };
};

export const getStats = (heroStats) => {
  if (!heroStats) return [];
  return [
    {
      title: "Base Armor",
      stat: heroStats.base_armor,
      background: armorBG,
      id: 0,
    },
    {
      title: "Movement Speed",
      stat: heroStats.move_speed,
      background: movementSpeedBG,
      id: 1,
    },
    {
      title: "Attack Rate",
      stat: heroStats.attack_rate,
      background: attackSpeedBG,
      id: 2,
    },
    {
      title: "Attack Range",
      stat: heroStats.attack_range,
      background: attackRangeBG,
      id: 3,
    },
    {
      title: "Base Health",
      stat: heroStats.base_health,
      background: baseHealthBG,
      id: 4,
    },
    {
      title: "Base Mana",
      stat: heroStats.base_mana,
      background: "/images/baseManaBG.jpg",
      id: 5,
    },
  ];
};
