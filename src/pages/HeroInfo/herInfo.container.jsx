import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import HeroInfoComponent from "./heroInfo.component";
import { getAttributes, getBasicInfo, getStats } from "../../utils/heroStats";

const HeroInfoContainer = (props) => {
  let { id } = useParams();

  const { data, loading } = useSelector((store) => store.list);

  const heroStats = data.find((hero) => hero.id === +id);

  const basicInfo = getBasicInfo(heroStats);

  const attributes = getAttributes(heroStats);

  const stats = getStats(heroStats);

  return (
    <HeroInfoComponent
      loading={loading}
      basicInfo={basicInfo}
      attributes={attributes}
      stats={stats}
    />
  );
};

export default HeroInfoContainer;
