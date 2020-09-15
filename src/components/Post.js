import React from "react";
import "./Post.css";

import { Card } from "antd";

const Post = (props) => {
  const { img, caption, date } = props;

  return (
    <Card style={{ width: 300 }} cover={<img alt="img" src={img} />}>
      <p className="Description">{caption}</p>
      <p className="Date">{date}</p>
    </Card>
  );
};

export default Post;
