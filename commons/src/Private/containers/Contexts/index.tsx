import { Descriptions, Space, Tag } from "antd";
import React from "react";
import { Container } from "../../constants/styles";

const ContextsPage: React.FC = () => {
  return (
    <Container>
      <Descriptions title="Auth Context and Provider" column={1} bordered>
        <Descriptions.Item label="Context Shape">
          <div>
            <pre>
              {`
{
  isAuthenticated: boolean
  scopes: {
    [key: string]: boolean
  };
  handleLogout: Function
}
`}
            </pre>
          </div>
        </Descriptions.Item>
        <Descriptions.Item
          label={
            <Space>
              isAuthenticated<Tag color='geekblue'>boolean</Tag>
            </Space>
          }
        >
          if user is currently logged in
        </Descriptions.Item>
        <Descriptions.Item
          label={
            <Space>
              scopes <Tag color='geekblue'>{`Record<String, boolean>`}</Tag>
            </Space>
          }
        >
          Object with user scopes from AAA
        </Descriptions.Item>
        <Descriptions.Item
          label={
            <Space>
              handleLogout<Tag color='geekblue'>Function</Tag>
            </Space>
          }
        >
          handles removing user auth cookie
        </Descriptions.Item>
      </Descriptions>
    </Container>
  );
};

export default ContextsPage;
