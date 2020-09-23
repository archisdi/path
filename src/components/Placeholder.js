import { Card, Col, Skeleton } from "antd";
import React from "react";

const Placeholder = (props) => {
  const { count = 1, rows = 4 } = props;

  const bodies = [];
  for (let i = 0; i < count; i++) {
    bodies.push(
      <Col
        key={"placeholder-" + i}
        xl={{ span: 8, offset: 8 }}
        lg={{ span: 10, offset: 7 }}
        md={{ span: 12, offset: 6 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <Card style={{ marginBottom: 30 }} bodyStyle={{ padding: 15 }}>
          <Skeleton paragraph={{ rows }} active={true} />
        </Card>
      </Col>
    );
  }

  return bodies;
};

export default Placeholder;
