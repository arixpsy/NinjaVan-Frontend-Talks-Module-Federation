import styled from "styled-components";
import { Layout } from "antd";

const { Header, Content, Sider } = Layout;

export const StyledHeader = styled(Header)`
  && {
    background-color: white;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const StyledContent = styled(Content)`
  && {
    height: calc(100vh - 64px);
    padding: 2rem 3rem;
    overflow-y: auto;
  }
`;

export const StyledSider = styled(Sider)`
  && {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }
`;

export const Logo = styled.div`
  color: white;
  font-size: 2rem;
  margin: 1rem;
  font-weight: bold;
`;
