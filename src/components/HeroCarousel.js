import React from "react";
import { Carousel, Button, Space } from "antd";

const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=80",
    eyebrow: "Wood-fired since 2014",
    title: "Cooked over oak, not opinion.",
    copy: "A live-fire kitchen in the heart of the city — smoke, char, and slow-cooked honesty on every plate.",
  },
  {
    img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1600&q=80",
    eyebrow: "Tonight's fire",
    title: "The ribeye is calling your name.",
    copy: "Dry-aged, bone marrow butter, roasted shallots — finished a few feet from your table.",
  },
  {
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80",
    eyebrow: "Weekend hours extended",
    title: "Long tables. Longer nights.",
    copy: "Communal seating, a low hum of conversation, and a bar that doesn't rush last call.",
  },
];

/**
 * Full-width hero built on Ant Design's Carousel. Each slide carries its
 * own copy and a pair of primary/ghost CTA buttons.
 */
export default function HeroCarousel({ onReserve, onViewMenu }) {
  return (
    <Carousel autoplay autoplaySpeed={5500} dots={{ className: "eo-hero-dots" }}>
      {SLIDES.map((slide) => (
        <div key={slide.title}>
          <div
            className="eo-hero-slide"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="eo-hero-copy">
              <div className="eo-eyebrow">{slide.eyebrow}</div>
              <h1 className="eo-display">{slide.title}</h1>
              <p>{slide.copy}</p>
              <Space size={12}>
                <Button size="large" className="eo-btn-ember" onClick={onReserve}>
                  Reserve a table
                </Button>
                <Button size="large" className="eo-btn-ghost" onClick={onViewMenu}>
                  View the menu
                </Button>
              </Space>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
