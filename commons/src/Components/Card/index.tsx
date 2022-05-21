import React from "react";
import { CardContainer } from "./styles";

type CardProps = {
  name?: string;
  backgroundColor?: string;
};

const Card: React.FC<CardProps> = ({
  name = "Ninja",
  backgroundColor = "lightblue",
}) => {
  return (
    <CardContainer $backgroundColor={backgroundColor}>
      <h1>My React Commons Card</h1>
      <p>Hello {name}!</p>
    </CardContainer>
  );
};

export default Card;

import { IComponentContract } from './../../Private/types/commons/componentContract'

const CardComponentContract: IComponentContract = {
  component: Card,
  componentName: "Card",
  propTypes: [
    {
      name: "name",
      types: ["undefined", "string"],
      defaultValue: "Ninja"
    },
    {
      name: "backgroundColor",
      types: ["undefined", "string"],
      defaultValue: "lightblue"
    },
  ],
};

export { CardComponentContract };
