import React from "react";
import { CardContainer } from "./styles";

type CardProps = {
  name?: string
};

const Card: React.FC<CardProps> = ({
  name = 'Ninja'
}) => {
  return (
    <CardContainer>
      <h1>My React Commons Card</h1>
      <p>Hello {name}!</p>
    </CardContainer>
  );
};

export default Card;
