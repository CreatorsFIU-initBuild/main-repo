import React, { useState } from "react";
import "./deals.css";
import heartIcon from "../../../assets/heart.png";
import redHeartIcon from "../../../assets/heart_filled.png";
import { useNavigate } from "react-router-dom";

import product1 from "../../../assets/product1.jpg";
import product2 from "../../../assets/product2.jpg";
import product3 from "../../../assets/product3.jpg";
import product4 from "../../../assets/product4.jpeg";

const Deals = () => {
  // Product data - in a real app, this might come from an API
  const products = [
    {
      id: 1,
      name: "Anime Glass Painting",
      discountPrice: "$19.99",
      discountPercent: "20% Off",
      originalPrice: "$24.99",
      images: [product1, product2, product3],
    },
    {
      id: 2,
      name: "Binary Bracelet Activity Template",
      discountPrice: "$5.09",
      discountPercent: "15% Off",
      originalPrice: "$5.99",
      images: [product2, product1, product3],
    },
    {
      id: 3,
      name: "Chemistry Chapter 1 Notes",
      discountPrice: "$1.99",
      discountPercent: "50% Off",
      originalPrice: "$3.99",
      images: [product3, product2, product1],
    },
    {
      id: 4,
      name: "Crochet Baby Mouse",
      discountPrice: "$14.39",
      discountPercent: "10% Off",
      originalPrice: "$15.99",
      images: [product4, product2, product1],
    },
  ];

  // Product Card Component
  const ProductCard = ({ product }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();
    
    const handleProductClick = () => {
      navigate("/product");
    };

    // Change image in the carousel
    const changeImage = (direction) => {
      const newIndex =
        (activeImageIndex + direction + product.images.length) %
        product.images.length;
      setActiveImageIndex(newIndex);
    };

    const toggleHeart = () => {
      setIsLiked(!isLiked);
    };


    return (
      <div className="main" onClick={handleProductClick}>
        <div className="image-carousel">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} view ${index + 1}`}
              className={index === activeImageIndex ? "active" : ""}
            />
          ))}
          <div className="carousel-indicators">
            {product.images.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  index === activeImageIndex ? "active" : ""
                }`}
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </div>
          <button
            className="carousel-arrow prev-arrow"
            onClick={() => changeImage(-1)}
          >
            ❮
          </button>
          <button
            className="carousel-arrow next-arrow"
            onClick={() => changeImage(1)}
          >
            ❯
          </button>
        </div>
        <img
          src={isLiked ? redHeartIcon : heartIcon}
          className="heartIcon"
          alt="Add to favorites"
          onClick={toggleHeart}
        />
        <div className="details">
          <p>{product.name}</p>
          <h3>
            <span className="discount-price">{product.discountPrice}</span>
            <span className="discount-container">
              {product.discountPercent}
            </span>
            <span className="original-price">{product.originalPrice}</span>
          </h3>
        </div>
      </div>
    );
  };

  return (
    <section id="item1" className="deals-section">
      {/* Main Container - horizontal scrolling */}
      <div className="main-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Deals;
