import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import { StyledHeader, StyledContent, StyledSider, Logo } from "./styles";
import { getNavConfig, navigation } from "./Private/config/navConfig";
import { INavConfig } from "./Private/types/commons/nav";
import { ROUTES } from "./Private/constants/nav";
import "./index.css";

const App = () => {
  const { pathname } = useLocation();

  return (
    <Layout hasSider>
      <StyledSider>
        <Logo>React Commons</Logo>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          items={getNavConfig.map((el: INavConfig, i: number) => ({
            key: el.path,
            label: <Link to={el.path}>{el.nav.label}</Link>,
            icon: React.createElement(el.nav.icon),
          }))}
        />
      </StyledSider>
      <Layout style={{ marginLeft: 200 }}>
        <StyledHeader>{navigation[pathname as ROUTES].nav.label}</StyledHeader>
        <StyledContent>
          <Routes>
            {getNavConfig.map((el: INavConfig) => (
              <Route
                key={el.path}
                path={el.path}
                element={React.createElement(el.nav.component)}
              />
            ))}
          </Routes>
        </StyledContent>
      </Layout>
    </Layout>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
