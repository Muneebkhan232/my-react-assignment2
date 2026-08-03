import React, { useState } from "react";
import { Layout, Badge, Button, Drawer, Space } from "antd";
import { GiFlame } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";

const { Header } = Layout;

const NAV_ITEMS = [
  { href: "#menu", label: "Menu" },
  { href: "#reserve", label: "Reservations" },
  { href: "#kitchen", label: "Kitchen Board" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

/**
 * Sticky site header. Cart button opens the shared CartDrawer (state lifted
 * to App). On small screens the nav links collapse into a Drawer menu.
 */
export default function Navbar({ cartCount, onOpenCart }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Header className="eo-header">
      <div className="eo-logo eo-display">
        <GiFlame size={22} />
        Raja's Kitchen
      </div>

      <nav className="eo-nav-links">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <Space size={8}>
        <Badge count={cartCount} size="small" color="#c1502e">
          <Button
            shape="circle"
            className="eo-btn-ghost"
            icon={<FiShoppingBag />}
            onClick={onOpenCart}
            aria-label="Open cart"
          />
        </Badge>
        <Button
          className="eo-btn-ghost"
          shape="circle"
          icon={<HiOutlineMenu />}
          onClick={() => setMobileOpen(true)}
          className="eo-btn-ghost eo-mobile-trigger"
        />
      </Space>

      <Drawer
        title="Raja's Kitchen"
        placement="right"
        onClose={() => setMobileOpen(false)}
        open={mobileOpen}
        width={260}
      >
        <Space direction="vertical" size={18} style={{ width: "100%" }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: 16 }}
            >
              {item.label}
            </a>
          ))}
        </Space>
      </Drawer>
    </Header>
  );
}
