import { Layout } from "antd";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PostPage from "./pages/PostPage";
import Logo from "./image/path-outline.png";

const { Header, Content } = Layout;

const App = () => {
  const contentClass = {
    padding: 24,
    margin: 0,
    minHeight: 280,
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Header className="App-header">
            <div className="logo">
              <img width="75" alt="path" src={Logo}></img>
            </div>
          </Header>
          <Content style={contentClass}>
            <Switch>
              <Route path="/" component={PostPage}></Route>
            </Switch>
          </Content>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;
