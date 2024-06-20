import React from "react";
import WhatIsCarmoon from "./WhatIsCatmoon";
import HowIsCatmoon from "./HowIsCatmoon";
import ByCatMoon from "./BuyCatMoon";

type Props = {};

const Information = (props: Props) => {
  return (
    <React.Fragment>
      <WhatIsCarmoon />
      <HowIsCatmoon />
      <ByCatMoon />
    </React.Fragment>
  );
};

export default Information;
