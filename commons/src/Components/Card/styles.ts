import React from "react";
import styled from "styled-components";

type CardContainerProps = React.FC & {
  $backgroundColor: string;
};

export const CardContainer = styled.div<CardContainerProps>`
  min-height: 100px;
  min-width: 200px;
  max-width: 300px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 4px;
  display: grid;
  place-items: center;
  text-align: center;
`;
