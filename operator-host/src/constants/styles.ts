import styled from "styled-components";
import { Layout, Menu } from "antd";

const { Sider, Header, Content } = Layout;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  padding: 2rem;
  margin: 2rem 3rem;
`;

export const StyledSider = styled(Sider)`
  && {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #25282a;

    && div.logo {
      padding: 1.5rem 0;
      background-color: #ba0c2f;
      text-align: center;
    }
  }
`;

export const StyledHeader = styled(Header)`
  && {
    background-color: #25282a;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
  }
`;

export const StyledContent = styled(Content)`
  && {
    height: calc(100vh - 64px);
    overflow-y: auto;
  }
`;

export const StyledMenu = styled(Menu)`
  && {
    background-color: #25282a;
    border-color: #25282a;

    && .ant-menu-item {
      background-color: #25282a;
      color: white;

      & a {
        color: white;
      }

      ::after {
        border-color: #ba0c2f;
      }
    }

    && .ant-menu-item-selected {
      background-color: #3b3e3f;
    }
  }
`;
