import React from "react";

type Props = {};

const ByCatMoon = (props: Props) => {
  return (
    <div className="!mt-14 px-5 container mr-auto ml-auto flex flex-col !mb-24">
      <div className="max-w-[800px] mr-auto ml-auto text-center">
        <h2 className="font-h1 mb-5">How to buy CATMOON</h2>
        <p className="text-base px-2">
          <b>Buy on : Pinksale - Uniswap </b>
        </p>
        <p>
          Fairlaunch on Pinksale <br />
          Softcap 1 Eth <br />
          Hardcap 10 Eth <br />
          Min buy 0.02 Eth <br />
          Max buy 0.2 Eth <br />
          Launch time : <br />
          Listing on Uniswap
        </p>
      </div>
    </div>
  );
};

export default ByCatMoon;
