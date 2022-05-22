import React from "react";
import ReactDOM from "react-dom";
import {
  useLocation,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Layout } from "antd";
import {
  StyledSider,
  StyledHeader,
  StyledContent,
  StyledMenu,
} from "./constants/styles";
import { INavConfig } from "./types/commons/nav";
import { navigation, getNavConfig } from "./config/navConfig";
import { ROUTES } from "./constants/nav";

import "./index.css";

const App = () => {
  const { pathname } = useLocation();

  return (
    <Layout hasSider>
      <StyledSider>
        <div className="logo">
          <img src="./NVLogo.png" />
        </div>
        <StyledMenu
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
