import { Descriptions, Space, Tag } from "antd";
import React from "react";
import { Container } from "../../constants/styles";

const UtilsPage: React.FC = () => {
  return (
    <Container>
      <Descriptions title="DataUtils" column={1} bordered>
        <Descriptions.Item
          label={
            <Space>
              toSnakeCase <Tag color="geekblue">{`Function`}</Tag>
            </Space>
          }
        >
          Transforms object keys to snake_Case
        </Descriptions.Item>
        <Descriptions.Item
          label={
            <Space>
              toCamelCase <Tag color="geekblue">{`Function`}</Tag>
            </Space>
          }
        >
          Transforms object keys to camelCase
        </Descriptions.Item>
      </Descriptions>
    </Container>
  );
};

export default UtilsPage;
