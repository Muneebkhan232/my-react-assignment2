import React from "react";
import { GiFlame } from "react-icons/gi";

/**
 * The page's signature element: a small ember/flame mark flanked by
 * hairlines, used between every major section instead of a plain <hr>.
 */
export default function EmberDivider() {
  return (
    <div className="eo-ember-divider" aria-hidden="true">
      <span className="line" />
      <GiFlame size={18} />
      <span className="line" />
    </div>
  );
}
