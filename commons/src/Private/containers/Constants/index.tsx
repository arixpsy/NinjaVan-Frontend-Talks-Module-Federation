import React from "react";
import { Container } from "../../constants/styles";
import { Country } from "../../../Constants";
import { Descriptions, Form, Typography } from "antd";

const ConstantsPage: React.FC = () => {
  return (
    <Container>
      {Object.keys(Country).map((k) => (
        <Descriptions title={k} key={k}>
          <Form>
            <Typography style={{ width: "100%" }}>
              <pre style={{ margin: 0 }}>
                {JSON.stringify(Country[k], null, 2)}
              </pre>
            </Typography>
          </Form>
        </Descriptions>
      ))}
    </Container>
  );
};

export default ConstantsPage;
