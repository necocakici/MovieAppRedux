import React from "react";
import { Card } from "antd";

const { Meta } = Card;

function CustomCard(props) {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={`https://image.tmdb.org/t/p/w500${props.image}`}
          />
        }
      >
        <Meta title={props.title} description={props.description} />
      </Card>
    </div>
  );
}

export default CustomCard;
