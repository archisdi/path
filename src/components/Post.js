import { Card, Col, Image } from "antd";
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
    <Col xl={{ span: 8, offset: 8 }}>
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
    </Col>
  );
};

export default Post;
