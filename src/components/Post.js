import { Card, Col, Image, Skeleton } from "antd";
import React, { useState } from "react";
import LazyLoad from "react-lazyload";

const Post = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { id, img, caption, date } = props;

  const image = img && (
    <>
      <Col offset={1} span={22}>
        <Skeleton active={!isLoaded} loading={!isLoaded} />
      </Col>
      <LazyLoad>
        <Image
          src={img}
          id={id}
          style={!isLoaded ? { display: "none" } : {}}
          onLoad={() => setIsLoaded(true)}
        />
      </LazyLoad>
    </>
  );

  return (
    <Col
      xl={{ span: 8, offset: 8 }}
      lg={{ span: 10, offset: 7 }}
      md={{ span: 12, offset: 6 }}
      sm={{ span: 24 }}
      xs={{ span: 24 }}
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
