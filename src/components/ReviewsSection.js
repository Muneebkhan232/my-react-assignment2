import React from "react";
import { Row, Col, Card, Rate, Avatar, Typography, Upload, message } from "antd";
import { FiUploadCloud } from "react-icons/fi";
import reviewData from "../data/reviewData";

const { Title, Paragraph, Text } = Typography;

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("");
}

/**
 * Guest reviews grid plus an Upload panel ("share a photo of your dish").
 * Upload is faked with beforeUpload returning false so nothing actually
 * leaves the browser; message.* gives feedback either way.
 */
export default function ReviewsSection() {
  const uploadProps = {
    accept: "image/*",
    showUploadList: false,
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("Please upload an image file.");
        return Upload.LIST_IGNORE;
      }
      message.success(`Thanks! "${file.name}" was added to your review.`);
      return false;
    },
  };

  return (
    <section id="reviews" className="eo-section">
      <div className="eo-section-head">
        <div className="eo-eyebrow">Guest Reviews</div>
        <Title level={2} className="eo-display eo-section-title">
          What the room is saying
        </Title>
      </div>

      <Row gutter={[20, 20]}>
        {reviewData.map((review) => (
          <Col xs={24} md={8} key={review.id}>
            <Card className="eo-review-card">
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
                <Avatar style={{ backgroundColor: "#7c8b6f" }}>{initials(review.name)}</Avatar>
                <div>
                  <Text className="eo-review-name">{review.name}</Text>
                  <div className="eo-review-date eo-mono">{review.date}</div>
                </div>
              </div>
              <Rate disabled allowHalf defaultValue={review.rating} style={{ fontSize: 13 }} />
              <Paragraph className="eo-review-text" style={{ marginTop: 10 }}>
                {review.text}
              </Paragraph>
            </Card>
          </Col>
        ))}

        <Col xs={24} md={8}>
          <div className="eo-upload-panel" style={{ height: "100%" }}>
            <FiUploadCloud size={26} color="#c9a86a" />
            <Title level={5} className="eo-display" style={{ color: "#f4eedd", marginTop: 10 }}>
              Add your own review
            </Title>
            <Paragraph style={{ color: "rgba(244,238,221,0.6)", fontSize: 13 }}>
              Share a photo of your plate — it might make next month's menu card.
            </Paragraph>
            <Upload {...uploadProps}>
              <span className="eo-btn-ghost" role="button" style={{ cursor: "pointer", padding: "8px 18px", borderRadius: 6, border: "1px solid rgba(244,238,221,0.4)", display: "inline-block" }}>
                Choose photo
              </span>
            </Upload>
          </div>
        </Col>
      </Row>
    </section>
  );
}
