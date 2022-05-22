import React from "react";
import Layout from "antd/lib/layout/layout";
import { Space } from "antd";


// From React Commons
import Card from "commons/Components/Card";
import { Country } from "commons/Constants";

const ExampleServiceHome: React.FC = () => {
  return (
    <Layout style={{minHeight: '100%'}}>
      <Space direction="vertical" align="center">
        <h2>Example service Page</h2>
        <h1>Using Card from React Commons</h1>
        <Card name="Example Service" backgroundColor="green" />
        <h1>Using Constants from React Commons</h1>
        <div>
          <pre>
            COUNTRIES:
            {JSON.stringify(Country.COUNTRIES, null, 2)}
          </pre>
        </div>
      </Space>
    </Layout>
  );
};

export default ExampleServiceHome;
