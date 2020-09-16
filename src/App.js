import { Layout } from "antd";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Logo from "./image/path-outline.png";
import PostPage from "./pages/PostPage";

const { Header, Content } = Layout;

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Header className="App-header">
            <div className="logo">
              <img
                style={{ paddingBottom: 5 }}
                width="80"
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
            <Switch>
              <Route path="/" component={PostPage}></Route>
              <Route path="/:postId" component={PostPage}></Route>
            </Switch>
          </Content>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;
