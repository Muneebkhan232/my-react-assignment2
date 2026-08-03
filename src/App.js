import React, { useState } from "react";
import { ConfigProvider, Layout, theme as antdTheme, message } from "antd";

import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import EmberDivider from "./components/EmberDivider";
import MenuSection from "./components/MenuSection";
import ReservationSection from "./components/ReservationSection";
import KitchenBoard from "./components/KitchenBoard";
import ReviewsSection from "./components/ReviewsSection";
import QRMenuSection from "./components/QRMenuSection";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

const { Content } = Layout;

/**
 * Ember & Oak — a single-page restaurant site.
 * Cart state (added dishes, drawer visibility) lives here and is shared
 * between the Navbar badge, MenuSection's "Add" buttons, and CartDrawer.
 */
export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (dish) => {
    setCartItems((prev) => [...prev, dish]);
    message.success(`${dish.name} added to your order`);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: antdTheme.darkAlgorithm,
        token: {
          colorPrimary: "#c1502e",
          colorBgBase: "#1e1a16",
          colorTextBase: "#f4eedd",
          borderRadius: 8,
          fontFamily: "'Work Sans', sans-serif",
        },
      }}
    >
      <Layout className="eo-app">
        <Navbar cartCount={cartItems.length} onOpenCart={() => setCartOpen(true)} />

        <Content>
          <HeroCarousel onReserve={() => scrollTo("reserve")} onViewMenu={() => scrollTo("menu")} />

          <EmberDivider />
          <MenuSection onAdd={addToCart} />

          <EmberDivider />
          <ReservationSection />

          <EmberDivider />
          <KitchenBoard />

          <EmberDivider />
          <ReviewsSection />

          <EmberDivider />
          <QRMenuSection />
        </Content>

        <Footer />

        <CartDrawer
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          items={cartItems}
          onRemove={removeFromCart}
        />
      </Layout>
    </ConfigProvider>
  );
}
