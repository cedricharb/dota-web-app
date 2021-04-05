import React, { useEffect, useState } from "react";
import HeroListComponent from "./heroList.component";

const HeroListContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [heroList, setHeroList] = useState([]);

  useEffect(() => {
    fetch("https://api.opendota.com/api/heroStats")
      .then((response) => response.json())
      .then((result) => setHeroList(result))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  });
  console.log(heroList);
  return <HeroListComponent heroList={heroList} laoding={loading} />;
};

export default HeroListContainer;
