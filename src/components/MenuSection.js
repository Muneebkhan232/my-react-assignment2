import React, { useState, useMemo } from "react";
import { Row, Col, Typography, Tag } from "antd";
import MenuCard from "./MenuCard";
import menuData, { categories } from "../data/menuData";

const { Title, Paragraph } = Typography;
const { CheckableTag } = Tag;

/**
 * Menu grid with a category filter built from Tag.CheckableTag.
 * Filtering state is local; adding a dish bubbles up to App's cart state.
 */
export default function MenuSection({ onAdd }) {
  const [active, setActive] = useState("All");

  const dishes = useMemo(
    () => (active === "All" ? menuData : menuData.filter((d) => d.category === active)),
    [active]
  );

  return (
    <section id="menu" className="eo-section" style={{ paddingTop: 8 }}>
      <div className="eo-section-head">
        <div className="eo-eyebrow">The Menu</div>
        <Title level={2} className="eo-display eo-section-title">
          What's coming off the fire
        </Title>
        <Paragraph style={{ color: "rgba(244,238,221,0.6)", maxWidth: 520, margin: "0 auto" }}>
          A short, changing menu built around what the wood-fired oven and grill
          do best.
        </Paragraph>
      </div>

      <div className="eo-tag-filter">
        {categories.map((cat) => (
          <CheckableTag
            key={cat}
            checked={active === cat}
            onChange={() => setActive(cat)}
            style={{
              padding: "5px 16px",
              borderRadius: 20,
              border: "1px solid rgba(244,238,221,0.18)",
              background: active === cat ? "#c1502e" : "transparent",
              color: active === cat ? "#f4eedd" : "rgba(244,238,221,0.7)",
            }}
          >
            {cat}
          </CheckableTag>
        ))}
      </div>

      <Row gutter={[20, 20]}>
        {dishes.map((dish) => (
          <Col xs={24} sm={12} lg={6} key={dish.id}>
            <MenuCard dish={dish} onAdd={onAdd} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
