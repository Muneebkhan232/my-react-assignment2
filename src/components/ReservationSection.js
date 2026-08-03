import React, { useState } from "react";
import {
  Row,
  Col,
  DatePicker,
  Select,
  Button,
  Modal,
  Typography,
  Form,
  notification,
} from "antd";
import { GiFlame } from "react-icons/gi";

const { Paragraph } = Typography;

const TIME_SLOTS = ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"];
const PARTY_SIZES = [1, 2, 3, 4, 5, 6, "7+"];

/**
 * Reservation form: DatePicker + two Selects, a confirmation Modal, and
 * an antd notification once the booking is confirmed.
 */
export default function ReservationSection() {
  const [form] = Form.useForm();
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingBooking, setPendingBooking] = useState(null);
  const [api, contextHolder] = notification.useNotification();

  const handleSubmit = (values) => {
    setPendingBooking(values);
    setModalOpen(true);
  };

  const confirmBooking = () => {
    setModalOpen(false);
    api.success({
      message: "Table reserved",
      description: `You're booked for ${pendingBooking.size} on ${pendingBooking.date.format(
        "MMMM D"
      )} at ${pendingBooking.time}. A confirmation text is on its way.`,
      placement: "bottomRight",
    });
    form.resetFields();
  };

  return (
    <section id="reserve" className="eo-section">
      {contextHolder}
      <Row gutter={[40, 32]} className="eo-reserve-wrap" align="middle">
        <Col xs={24} md={9}>
          <div className="eo-reserve-side">
            <GiFlame size={26} color="#c1502e" />
            <div className="eo-display">Book the table nearest the fire</div>
            <Paragraph>
              We hold most tables for walk-ins, but the counter seats facing the
              hearth go fast — reserve one a few days out if that's your seat of
              choice.
            </Paragraph>
          </div>
        </Col>

        <Col xs={24} md={15}>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Row gutter={16}>
              <Col xs={24} sm={8}>
                <Form.Item
                  name="date"
                  label={<span className="eo-field-label">Date</span>}
                  rules={[{ required: true, message: "Pick a date" }]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item
                  name="time"
                  label={<span className="eo-field-label">Time</span>}
                  rules={[{ required: true, message: "Pick a time" }]}
                >
                  <Select placeholder="Select time" options={TIME_SLOTS.map((t) => ({ value: t, label: t }))} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item
                  name="size"
                  label={<span className="eo-field-label">Party size</span>}
                  rules={[{ required: true, message: "Pick a size" }]}
                >
                  <Select
                    placeholder="Guests"
                    options={PARTY_SIZES.map((s) => ({ value: s, label: `${s} guest${s === 1 ? "" : "s"}` }))}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Button htmlType="submit" size="large" className="eo-btn-ember" block>
              Reserve now
            </Button>
          </Form>
        </Col>
      </Row>

      <Modal
        title="Confirm your reservation"
        open={modalOpen}
        onOk={confirmBooking}
        onCancel={() => setModalOpen(false)}
        okText="Confirm"
        okButtonProps={{ className: "eo-btn-ember" }}
      >
        {pendingBooking && (
          <>
            <p>
              <strong>Date:</strong> {pendingBooking.date?.format("dddd, MMMM D")}
            </p>
            <p>
              <strong>Time:</strong> {pendingBooking.time}
            </p>
            <p>
              <strong>Party size:</strong> {pendingBooking.size}
            </p>
          </>
        )}
      </Modal>
    </section>
  );
}
