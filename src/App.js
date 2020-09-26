import { Layout } from "antd";
import React from "react";
import "./App.css";
import PostPage from "./pages/PostPage";
import Logo from "./images/path-outline.png";

const { Header, Content } = Layout;

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Header className="App-header">
          <div className="logo">
            <img
              style={{ paddingBottom: 5 }}
              width="75"
              alt="path"
              src={Logo}
            ></img>
          </div>
        </Header>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <PostPage />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
