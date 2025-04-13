import React from "react";
import "./footer.css";

// Import images
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/insta.png";
import tiktok from "../../assets/tiktok.png";
import twitter from "../../assets/twitter.png";
import cartPic from "../../assets/footer6_copy.png";
import logo from "../../assets/logo1_copy.png";

const Footer = ({ scrollToTop }) => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-logo-centered">
          <img src={logo} alt="CreatorsFIU Logo" />
        </div>

        <div className="footer-main-content">
          <div className="footer-section-left">
            <h4>SECTIONS</h4>
            <div className="footer-links-grid">
              <div>
                <ul>
                  <li>
                    <a href="/freelance">Freelance</a>
                  </li>
                  <li>
                    <a href="/music-audio">Music & Audio</a>
                  </li>
                  <li>
                    <a href="/technology">Technology & Software</a>
                  </li>
                  <li>
                    <a href="/templates">Templates</a>
                  </li>
                  <li>
                    <a href="/digital-tools">Digital Tools</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="/arts-crafts">Arts & Crafts</a>
                  </li>
                  <li>
                    <a href="/study-materials">Study Materials</a>
                  </li>
                  <li>
                    <a href="/covers-cartoons">Covers & cartoons</a>
                  </li>
                  <li>
                    <a href="/free">Free Stuff</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-section-right">
            <h4>MORE</h4>
            <div className="footer-links-grid">
              <div>
                <ul>
                  <li>
                    <a href="/account">Manage Account</a>
                  </li>
                  <li>
                    <a href="/blogs">Blogs</a>
                  </li>
                  <li>
                    <a href="/tutorials">Tutorials & Guides</a>
                  </li>
                  <li>
                    <a href="/offers">Offers</a>
                  </li>
                  <li>
                    <a href="/events">Events</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="/newsletters">Newsletters</a>
                  </li>
                  <li>
                    <a href="/app">Download App</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-links-horizontal">
          <div className="footer-group">
            <p className="footer-heading">About</p>
            <a href="/careers">Careers</a>
          </div>
          <div className="footer-group">
            <p className="footer-heading">Contact</p>
            <a href="/faq">F.A.Q.</a>
          </div>
          <div className="footer-group">
            <p className="footer-heading">Media Kit</p>
            <a href="/press">Press</a>
          </div>
          <div className="footer-group">
            <p className="footer-heading">Accessibility Help</p>
            <a href="/user-agreement">User Agreement</a>
          </div>
          <div className="footer-group">
            <p className="footer-heading">Privacy Policy</p>
            <a href="/florida-privacy">Your Florida Privacy Rights</a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>
              © {new Date().getFullYear()} CreatorsFIU. All rights reserved.{" "}
              <em>CreatorsFIU</em> may earn a portion of sales from products
              that are
            </p>
            <p>
              purchased through our site as part of our Affiliate Partnerships
              with retailers. The material on this site may not
            </p>
            <p>
              be reproduced, distributed, transmitted, cached or otherwise used,
              except with the prior written permission of Condé Nast.
            </p>
          </div>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktok} alt="TikTok" />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="back-to-top-wrapper">
          <button className="back-to-top" onClick={scrollToTop}>
            ↑ Back to top
          </button>
        </div>

        <div className="footer-image">
          <img src={cartPic} alt="People with carts" />
        </div>

        <div className="privacy-choices">
          <a href="/privacy-choices">Your Privacy Choices</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
