import React from "react";
import { Card, Rate, Button, Typography } from "antd";
import { FiPlus } from "react-icons/fi";

const { Text } = Typography;

/**
 * Single dish card used inside MenuSection's grid.
 */
export default function MenuCard({ dish, onAdd }) {
  return (
    <Card
      hoverable
      className="eo-menu-card"
      cover={<img src={dish.img} alt={dish.name} />}
    >
      <div className="eo-dish-row">
        <Text className="eo-dish-name eo-display">{dish.name}</Text>
        <Text className="eo-dish-price eo-mono">${dish.price}</Text>
      </div>
      <Rate disabled allowHalf defaultValue={dish.rating} style={{ fontSize: 13 }} />
      <p className="eo-dish-note">{dish.note}</p>
      <div className="eo-dish-footer">
        <Text className="eo-mono" style={{ color: "rgba(244,238,221,0.4)", fontSize: 12 }}>
          {dish.category}
        </Text>
        <Button
          size="small"
          className="eo-btn-ember"
          icon={<FiPlus />}
          onClick={() => onAdd(dish)}
        >
          Add
        </Button>
      </div>
    </Card>
  );
}
