import React from "react";
import { QRCode, Typography, Space } from "antd";
import { GiKnifeFork } from "react-icons/gi";

const { Title, Paragraph } = Typography;

/**
 * "Table stamp" — a QR code guests can scan for the always-current digital
 * menu, styled like a wax seal card rather than a plain code on white.
 */
export default function QRMenuSection() {
  return (
    <section id="visit" className="eo-section">
      <div className="eo-qr-card">
        <div className="eo-qr-stamp">
          <QRCode value="https://www.google.com/search?q=Raja%27s+Kitchen+menu" size={128} bordered={false} color="#1e1a16" />
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <Space align="center" size={8}>
            <GiKnifeFork color="#c9a86a" />
            <span className="eo-eyebrow">At the table</span>
          </Space>
          <Title level={3} className="eo-display" style={{ color: "#f4eedd", margin: "8px 0 8px" }}>
            Scan for tonight's menu
          </Title>
          <Paragraph style={{ color: "rgba(244,238,221,0.65)", maxWidth: 420 }}>
            Our menu changes with what's fresh at the market, so the paper
            version never quite keeps up. Scan the code for the exact list
            the kitchen is working from right now.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
