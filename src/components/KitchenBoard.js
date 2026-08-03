import React from "react";
import { Table, Tag, Progress, Typography } from "antd";
import bookingsData from "../data/bookingsData";

const { Title, Paragraph } = Typography;

const STATUS_COLOR = {
  Seated: "default",
  Fired: "gold",
  "On the fire": "volcano",
  Plating: "green",
};

const columns = [
  { title: "Table", dataIndex: "table", key: "table" },
  { title: "Guest", dataIndex: "guest", key: "guest" },
  { title: "Party", dataIndex: "size", key: "size", responsive: ["sm"] },
  { title: "Time", dataIndex: "time", key: "time", className: "eo-mono" },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => <Tag color={STATUS_COLOR[status] || "default"}>{status}</Tag>,
  },
  {
    title: "Prep",
    dataIndex: "progress",
    key: "progress",
    render: (progress) => (
      <Progress
        percent={progress}
        size="small"
        strokeColor="#c1502e"
        showInfo={window.innerWidth > 480}
      />
    ),
  },
];

/**
 * "Live" kitchen board — combines Table, Tag, and Progress to show each
 * active ticket's status and fire time at a glance.
 */
export default function KitchenBoard() {
  return (
    <section id="kitchen" className="eo-section">
      <div className="eo-section-head">
        <div className="eo-eyebrow">Right Now</div>
        <Title level={2} className="eo-display eo-section-title">
          What the kitchen is firing
        </Title>
        <Paragraph style={{ color: "rgba(244,238,221,0.6)", maxWidth: 520, margin: "0 auto" }}>
          A peek at tonight's board — real tickets move faster than this.
        </Paragraph>
      </div>
      <div className="eo-board-wrap">
        <Table
          columns={columns}
          dataSource={bookingsData}
          pagination={false}
          scroll={{ x: 560 }}
        />
      </div>
    </section>
  );
}
