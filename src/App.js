import React from "react";
import "./App.css";

import { Layout } from "antd";
import Post from "./components/Post";

const { Header, Content } = Layout;

const App = () => {
  const contentClass = {
    padding: 24,
    margin: 0,
    minHeight: 280,
  };

  return (
    <div className="App">
      <Layout>
        <Header className="App-header"></Header>
        <Content style={contentClass}>
          <Post
            caption="Karnaval Warna Warni Sulawesi 2016 😃😆😎"
            img="https://firebasestorage.googleapis.com/v0/b/archisdi-path.appspot.com/o/media%2F201610%2F57f914e383d3dce47c1e50e7_0.jpg?alt=media"
            date="2020-12-12"
          ></Post>
        </Content>
      </Layout>
    </div>
  );
};

export default App;
