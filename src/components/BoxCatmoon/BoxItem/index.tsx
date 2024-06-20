import React from "react";

type Props = {
  Number: string;
  Title: string;
  Content: string;
};

const BoxItem: React.FC<Props> = ({ Content, Number, Title }) => {
  return (
    <div className="w-11/12 ctaBox">
      <div className="ctaCount">{Number}</div>
      <h3 className="text-2xl">{Title}</h3>
      <p> {Content} </p>
    </div>
  );
};

export default BoxItem;
