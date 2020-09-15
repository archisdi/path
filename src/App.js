import React from "react";
import { Layout } from "antd";
import "./App.css";

const { Header, Content } = Layout;

const App = () => (
  <div className="App">
    <Layout>
      <Header></Header>
      <Content>
        <h1>Content Here</h1>
      </Content>
    </Layout>
  </div>
);

export default App;
