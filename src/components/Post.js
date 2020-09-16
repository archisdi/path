import { Card, Col, Image } from "antd";
import React from "react";
import LazyLoad from "react-lazyload";

const Post = (props) => {
  const { id, img, caption, date } = props;

  const image = img && (
    <LazyLoad>
      <Image src={img} />
    </LazyLoad>
  );

  return (
    <Col
      xl={{ span: 8, offset: 8 }}
      lg={{ span: 10, offset: 7 }}
      md={{ span: 12, offset: 6 }}
      onClick={() => console.log(id)}
    >
      <Card
        style={{ marginBottom: 30 }}
        cover={image}
        bodyStyle={{ padding: 15 }}
      >
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
            marginBottom: 0,
          }}
        >
          {date}
        </p>
      </Card>
    </Col>
  );
};

export default Post;
