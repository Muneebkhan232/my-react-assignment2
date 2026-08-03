import React from "react";
import { Drawer, Button, Typography, Empty, notification } from "antd";
import { FiTrash2 } from "react-icons/fi";

const { Text } = Typography;

/**
 * Slide-over cart. Cart state lives in App and is passed down so the
 * Navbar badge and this drawer always agree on the count.
 */
export default function CartDrawer({ open, onClose, items, onRemove }) {
  const [api, contextHolder] = notification.useNotification();
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const checkout = () => {
    onClose();
    api.success({
      message: "Order sent to the kitchen",
      description: `Your ${items.length} item${items.length === 1 ? "" : "s"} ($${total}) will be fired shortly.`,
      placement: "bottomRight",
    });
  };

  return (
    <>
      {contextHolder}
      <Drawer title="Your order" open={open} onClose={onClose} width={360}>
        {items.length === 0 ? (
          <div className="eo-cart-empty">
            <Empty description="Nothing on the fire yet" />
          </div>
        ) : (
          <>
            {items.map((item, i) => (
              <div className="eo-cart-item" key={`${item.id}-${i}`}>
                <div>
                  <Text style={{ display: "block" }}>{item.name}</Text>
                  <Text className="eo-mono" style={{ fontSize: 12, opacity: 0.6 }}>
                    ${item.price}
                  </Text>
                </div>
                <Button
                  type="text"
                  icon={<FiTrash2 />}
                  onClick={() => onRemove(i)}
                  aria-label={`Remove ${item.name}`}
                />
              </div>
            ))}
            <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between" }}>
              <Text strong>Total</Text>
              <Text strong className="eo-mono">
                ${total}
              </Text>
            </div>
            <Button className="eo-btn-ember" block size="large" style={{ marginTop: 20 }} onClick={checkout}>
              Send to kitchen
            </Button>
          </>
        )}
      </Drawer>
    </>
  );
}
