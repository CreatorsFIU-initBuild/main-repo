// ProductSection.jsx
import React, { useState } from "react";
import "./productSection.css";
import heartIcon from "../../../assets/heart.png";
import redHeartIcon from "../../../assets/heart_filled.png";

// Import your product images
import product1 from "../../../assets/product1.jpg";
import product2 from "../../../assets/product2.jpg";
import product3 from "../../../assets/product3.jpg";
import product4 from "../../../assets/product4.jpeg";

// Product Card Component
const ProductCard = ({ product }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

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
    <div className="product-card">
      <div className="product-image-carousel">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.name} view ${index + 1}`}
            className={index === activeImageIndex ? "active" : ""}
          />
        ))}
        <div className="product-carousel-indicators">
          {product.images.map((_, index) => (
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
        src={isLiked ? redHeartIcon : heartIcon}
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

const ProductSection = ({ title, highlightText, sectionType }) => {
  // Product data defined within the component
  const allProducts = {
    bestSellers: [
      {
        id: 1,
        name: "Anime Glass Painting",
        price: "$19.99",
        images: [product1, product2, product3],
      },
      {
        id: 2,
        name: "Binary Bracelet Activity Template",
        price: "$5.09",
        images: [product2, product1, product3],
      },
      {
        id: 3,
        name: "Chemistry Chapter 1 Notes",
        price: "$1.99",
        images: [product3, product2, product1],
      },
      {
        id: 4,
        name: "Crochet Baby Mouse",
        price: "$14.39",
        images: [product4, product2, product1],
      },
    ],
    newArrivals: [
      {
        id: 1,
        name: "Chemistry Chapter 1 Notes",
        price: "$1.99",
        images: [product3, product2, product1],
      },
      {
        id: 2,
        name: "Crochet Baby Mouse",
        price: "$14.39",
        images: [product4, product2, product1],
      },
      {
        id: 3,
        name: "Binary Bracelet Activity Template",
        price: "$5.09",
        images: [product2, product1, product3],
      },
      {
        id: 4,
        name: "Anime Glass Painting",
        price: "$19.99",
        images: [product1, product2, product3],
      },
    ],
  };

  // Select which product array to use based on the sectionType prop
  const products = allProducts[sectionType] || [];

  return (
    <section id="products-section" className="products-deals-section">
      <h2>
        {title} <span className="product-highlight">{highlightText}</span>
      </h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
