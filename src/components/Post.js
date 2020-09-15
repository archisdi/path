import { Card, Image } from "antd";
import React from "react";
import LazyLoad from "react-lazyload";
import "./Post.css";

const Post = (props) => {
  const { img, caption, date } = props;

  const image = img && (
    <LazyLoad>
      <Image src={img} />
    </LazyLoad>
  );

  return (
    <Card style={{ marginBottom: 30 }} cover={image}>
      <p
        style={{
          textAlign: "left",
          fontSize: "small",
        }}
      >
        {caption}
      </p>
      <p
        style={{
          textAlign: "left",
          fontSize: "x-small",
          color: "grey",
        }}
      >
        {date}
      </p>
    </Card>
  );
};

export default Post;
