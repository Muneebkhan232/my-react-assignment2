import React from "react";
import { FiInstagram, FiFacebook, FiMail } from "react-icons/fi";
import { GiFlame } from "react-icons/gi";

/**
 * Site footer — hours, address, and contact, plus social links.
 */
export default function Footer() {
  return (
    <footer className="eo-footer">
      <div className="eo-footer-cols">
        <div>
          <div className="eo-logo eo-display" style={{ marginBottom: 14 }}>
            <GiFlame size={20} />
            Raja's Kitchen
          </div>
          <p style={{ maxWidth: 260 }}>
            A live-fire kitchen and bar. Wood, smoke, and slow-cooked
            honesty, plated nightly.
          </p>
          <div className="eo-social">
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <FiInstagram />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <FiFacebook />
            </a>
            <a href="muneebkhan198128@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div>
          <h4>Hours</h4>
          <p>Tue – Thu · 5pm – 10pm</p>
          <p>Fri – Sat · 5pm – 11pm</p>
          <p>Sun · 4pm – 9pm · Closed Mon</p>
        </div>

        <div>
          <h4>Find us</h4>
          <p>majeed colony sector2 landhi,karachi</p>
          <p> District Malir</p>
          <p>(+92)3462366436</p>
        </div>
      </div>
      <div className="eo-footer-bottom">
        © {new Date().getFullYear()} Raja's Kitchen. All rights reserved.
      </div>
    </footer>
  );
}
