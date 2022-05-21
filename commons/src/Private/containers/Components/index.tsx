import React from "react";
import { Container } from "../../constants/styles";
import { CardComponentContract } from "./../../../Components/Card";
import ComponentPreview from "../../components/ComponentPreview";

const ComponentsPage: React.FC = () => {
  return (
    <Container>
      <ComponentPreview componentContract={CardComponentContract} />
    </Container>
  );
};

export default ComponentsPage;
