import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/CreatorsFIU.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <div>
            <h4>SECTIONS</h4>
            <ul>
              <li>Freelance</li>
              <li>Music & Audio</li>
              <li>Technology & Software</li>
              <li>Templates</li>
              <li>Digital Tools</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Arts & crafts</li>
              <li>Study Materials</li>
              <li>Covers & cartoons</li>
              <li>Free stuff</li>
            </ul>
          </div>
          <div>
            <h4>MORE</h4>
            <ul>
              <li>Manage Account</li>
              <li>Study Materials</li>
              <li>Guides & Cartoons</li>
              <li>Tutorials & Guides</li>
              <li>Events</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Newsletters</li>
              <li>Download App</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <ul>
          <li>
            <strong>About</strong>
          </li>
          <li>Careers</li>
        </ul>
        <ul>
          <li>
            <strong>Contact</strong>
          </li>
          <li>F.A.Q.</li>
        </ul>
        <ul>
          <li>
            <strong>Media Kit</strong>
          </li>
          <li>Press</li>
        </ul>
        <ul>
          <li>
            <strong>Accessibility help</strong>
          </li>
          <li>User Agreement</li>
        </ul>
        <ul>
          <li>
            <strong>Privacy Policy</strong>
          </li>
          <li>Your Florida Privacy Rights</li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 CreatorsFIU. All rights reserved. CreatorsFIU may earn a
          portion of sales from products that are
          <br />
          purchased through our site as part of our Affiliate Partnerships with
          retailers. The material on this may not
          <br />
          be reproduced, distributed, transmitted, cached or otherwise used
          except with the prior written permission of CreatorsFIU gang
        </p>
        <div className="footer-icons">
          <span>
            <img src="/facebook-logo.png" alt="Logo" />
          </span>
          <span>
            <img src="/X-twitter-logo.png" alt="Logo" />
          </span>
          <span>
            <img src="/instagram-logo.png" alt="Logo" />
          </span>
          <span>
            <img src="/tiktok-logo.png" alt="Logo" />
          </span>
        </div>
      </div>

      <div className="footer-extra">
        <img src="/assets/walking.gif" alt="Walking animation" />
        <button>↑ Back to Top</button>
        <div className="privacy-toggle">
          <span>⚪ Your Privacy Choices</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
