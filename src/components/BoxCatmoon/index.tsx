import React from "react";
import BoxItem from "./BoxItem";

type Props = {};

const BoxCatMoon = (props: Props) => {
  const boxData = [
    {
      Number: "01",
      Title: "Utility",
      Content:
        "As the true community coin , $CATMOON utility comes in the form of its strong community and thriving ecosystem of integrations.",
    },
    {
        Number: "02",
        Title: "DISTRIBUTION",
        Content:
          "he distribution strategy of CATMOON is very Organic and can be verified on the blockchain. Anyone can invest any amount.",
    },
  ];

  return (
    <div className="container mr-auto ml-auto mt-14">
      <div className="grid grid-cols-2 gap-x-14">
        {
            boxData.map(item => <BoxItem Number={item.Number} Title={item.Title} Content={item.Content} /> )
        }
      </div>
    </div>
  );
};

export default BoxCatMoon;
