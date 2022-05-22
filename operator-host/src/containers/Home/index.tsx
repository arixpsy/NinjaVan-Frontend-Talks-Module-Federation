import React, { useState, MouseEventHandler } from "react";
import { Container } from "../../constants/styles";
import { Descriptions, Button } from "antd";
import Cookie from "js-cookie";

// From React Commons
import { useAuth, COOKIE_ACCESS_TOKEN } from "commons/Contexts/auth";

const Home: React.FC = () => {
  const { isAuthenticated, scopes, handleLogout } = useAuth();
  const [cookieValue, setCookieValue] = useState<string>("");

  const handleLogin: MouseEventHandler = (e: React.MouseEvent) => {
    Cookie.set(COOKIE_ACCESS_TOKEN, "Arix");
    setCookieValue("Arix");
  };

  return (
    <Container>
      <h1>Home page</h1>
      <Descriptions title="Auth Context from React Commons" bordered>
        <Descriptions.Item label="isAuthenticated">
          {isAuthenticated.toString()}
        </Descriptions.Item>
        <Descriptions.Item label="scopes">
          <div>
            <pre style={{ margin: 0 }}>{JSON.stringify(scopes) || "null"}</pre>
          </div>
        </Descriptions.Item>
      </Descriptions>
      <div>
        {isAuthenticated ? (
          <Button onClick={() => handleLogout()} type="ghost">
            Logout {cookieValue}
          </Button>
        ) : (
          <Button onClick={handleLogin} type="primary">
            Mock Login
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Home;
