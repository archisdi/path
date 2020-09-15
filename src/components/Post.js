import React from "react";
import "./Post.css";
import { Card } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Post = (props) => {
  const { img, caption, date } = props;

  const image = img && <LazyLoadImage src={img} alt="..." />;

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
