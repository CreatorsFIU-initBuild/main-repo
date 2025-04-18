import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Deals from "../../components/Homepage/Deals/Deals";
import NewsLetter from "../../components/Homepage/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/Homepage/HeroSection/HeroSection";
import ProductSection from "../../components/Homepage/ProductSection/ProductSection";
import FAQSection from "../../components/Homepage/FAQ/FAQSection";
import "./homepage.css";

import pic from "../../assets/hero_idea_19.png";

// Import product images for featured products
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import product4 from "../../assets/product4.jpeg";

import heart from "../../assets/heart.png";
import heartFilled from "../../assets/heart_filled.png";

// Featured product card component
const FeaturedProductCard = ({ product }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Ensure product has an images array
  const productImages = Array.isArray(product.images)
    ? product.images
    : [product.image];

  // Change image in the carousel
  const changeImage = (direction) => {
    const newIndex =
      (activeImageIndex + direction + productImages.length) %
      productImages.length;
    setActiveImageIndex(newIndex);
  };

  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="product-card">
      <div className="product-image-carousel">
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.name} view ${index + 1}`}
            className={index === activeImageIndex ? "active" : ""}
          />
        ))}
        <div className="product-carousel-indicators">
          {productImages.map((_, index) => (
            <span
              key={index}
              className={`product-indicator ${
                index === activeImageIndex ? "active" : ""
              }`}
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </div>
        <button
          className="product-arrow product-prev"
          onClick={(e) => {
            e.stopPropagation();
            changeImage(-1);
          }}
        >
          ❮
        </button>
        <button
          className="product-arrow product-next"
          onClick={(e) => {
            e.stopPropagation();
            changeImage(1);
          }}
        >
          ❯
        </button>
      </div>
      <img
        src={isLiked ? heartFilled : heart}
        className="product-heart-icon"
        alt="Add to favorites"
        onClick={(e) => {
          e.stopPropagation();
          toggleHeart();
        }}
      />
      <div className="product-details">
        <p className="product-name">{product.name}</p>
        <h3 className="product-price-container">
          <span className="product-price">{product.price}</span>
        </h3>
      </div>
    </div>
  );
};

const Homepage = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    const top = document.getElementById("#");
    if (top) {
      top.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewMore = () => {
    navigate("/campus-bestsellers");
  };

  const handleExploreDeals = () => {
    navigate("/one-time-deals");
  };

  return (
    <div id="#">
      <div className="app-container">
        <div>
          <Navbar />
        </div>
        <div>
          <HeroSection />
        </div>

        <div className="deals-section">
          <div className="fill">
            <h2 className="title-section">New Arrivals</h2>
            <div className="button-row">
              <button>View More</button>
              <button>Categories</button>
            </div>
          </div>
          <div className="NewArrivals-holder">
            <ProductSection sectionType="bestSellers" />
          </div>
        </div>

        <div className="split-layout">
          <h3>Discover your next can't-live-without.</h3>
          <img className="doodle-pt1" src={pic} alt="Illustration" />
        </div>

        <div className="campus-bestsellers-section">
          {/* Horizontal layout with title and product cards */}
          <div className="bestsellers-horizontal-layout">
            <div className="bestsellers-title">
              <h2>Campus</h2>
              <h2>Bestsellers</h2>
              <button className="view-more-btn" onClick={handleViewMore}>View More</button>
            </div>

            <div className="featured-cards">
              <FeaturedProductCard
                product={{
                  name: "CSE 101 Study Guide",
                  price: "$12.99",
                  images: [product3, product2, product1],
                }}
              />
              <FeaturedProductCard
                product={{
                  name: "Custom Dorm Art Print",
                  price: "$24.99",
                  images: [product2, product4, product3],
                }}
              />
              <FeaturedProductCard
                product={{
                  name: "Handmade Crochet Plushie",
                  price: "$18.50",
                  images: [product1, product3, product4],
                }}
              />
            </div>
          </div>

          {/* Bottom row with regular products */}
          <div className="regular-products">
            <ProductSection sectionType="newArrivals" />
          </div>
        </div>

        <div className="deals-section one-time-deals">
          <div className="deals-header">
            <h3>
              One-Time-Only <strong className="dealsWord">Deals!</strong>
            </h3>
            <button onClick={handleExploreDeals}>Explore Deals</button>
          </div>
          <Deals />
        </div>

        <div className="newsletter-reset">
          <NewsLetter />
        </div>

        <div className="web-stats">
          <h3>We are proud to be </h3>

          <div className="web-info-container">
            <div className="web-info-box">
              <h4>
                Selling <strong className="five-hundred-k">500,000+</strong>{" "}
                products sold through our platform
              </h4>
            </div>
          </div>
        </div>

        <div className="faq-isolation-wrapper">
          <FAQSection />
        </div>

        <div>
          <Footer scrollToTop={scrollToTop} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
