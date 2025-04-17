import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ProductSection from "../components/Homepage/ProductSection/ProductSection";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpeg";

const CampusBestsellers = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const featuredProducts = [
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
    {
      id: 5,
      name: "Anime Glass Painting",
      price: "$19.99",
      images: [product1, product2, product3],
    },
    {
      id: 6,
      name: "Binary Bracelet Activity Template",
      price: "$5.09",
      images: [product2, product1, product3],
    },
    {
      id: 7,
      name: "Chemistry Chapter 1 Notes",
      price: "$1.99",
      images: [product3, product2, product1],
    },
    {
      id: 8,
      name: "Crochet Baby Mouse",
      price: "$14.39",
      images: [product4, product2, product1],
    },
  ];

  const popularProducts = [
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
    {
      id: 5,
      name: "Chemistry Chapter 1 Notes",
      price: "$1.99",
      images: [product3, product2, product1],
    },
    {
      id: 6,
      name: "Crochet Baby Mouse",
      price: "$14.39",
      images: [product4, product2, product1],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <div className="px-8 py-8 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 mt-16 text-gray-800 font-['JetBrains_Mono']">
            Campus Bestsellers
          </h1>

          <div className="mb-12 w-full">
            <ProductSection
              title="Featured"
              highlightText="Bestsellers"
              sectionType="bestSellers"
              products={featuredProducts}
            />
          </div>

          <div className="mt-12 w-full">
            <ProductSection
              title="Popular"
              highlightText="Items"
              sectionType="newArrivals"
              products={popularProducts}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CampusBestsellers; 