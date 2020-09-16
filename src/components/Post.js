import { Card, Col, Image } from "antd";
import React from "react";
import LazyLoad from "react-lazyload";

const Post = (props) => {
  const { id, img, caption, date, ex } = props;

  const image = img && (
    <LazyLoad>
      {ex ? (
        <img
          src={img}
          style={{
            maxWidth: "100%",
            width: "auto ",
            filter: "blur(5px) grayscale(100%)",
          }}
          alt="..."
        />
      ) : (
        <Image src={img} id={id} />
      )}
    </LazyLoad>
  );

  return (
    <Col
      xl={{ span: 8, offset: 8 }}
      lg={{ span: 10, offset: 7 }}
      md={{ span: 12, offset: 6 }}
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
