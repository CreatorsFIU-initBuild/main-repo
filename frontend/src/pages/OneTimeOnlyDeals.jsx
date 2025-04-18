import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Deals from "../components/Homepage/Deals/Deals";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpeg";
import heartIcon from "../assets/heart.png";

const OneTimeOnlyDeals = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const featuredDeals = [
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
    {
      id: 5,
      name: "Custom T-Shirt Design",
      discountPrice: "$24.99",
      discountPercent: "25% Off",
      originalPrice: "$32.99",
      images: [product1, product3, product2],
    },
    {
      id: 6,
      name: "Digital Art Print",
      discountPrice: "$12.99",
      discountPercent: "30% Off",
      originalPrice: "$18.99",
      images: [product2, product4, product1],
    },
    {
      id: 7,
      name: "Study Planner",
      discountPrice: "$8.99",
      discountPercent: "40% Off",
      originalPrice: "$14.99",
      images: [product3, product1, product4],
    },
    {
      id: 8,
      name: "Handmade Jewelry Set",
      discountPrice: "$29.99",
      discountPercent: "15% Off",
      originalPrice: "$34.99",
      images: [product4, product3, product2],
    },
  ];

  const popularDeals = [
    {
      id: 1,
      name: "Chemistry Chapter 1 Notes",
      discountPrice: "$1.99",
      discountPercent: "50% Off",
      originalPrice: "$3.99",
      images: [product3, product2, product1],
    },
    {
      id: 2,
      name: "Crochet Baby Mouse",
      discountPrice: "$14.39",
      discountPercent: "10% Off",
      originalPrice: "$15.99",
      images: [product4, product2, product1],
    },
    {
      id: 3,
      name: "Binary Bracelet Activity Template",
      discountPrice: "$5.09",
      discountPercent: "15% Off",
      originalPrice: "$5.99",
      images: [product2, product1, product3],
    },
    {
      id: 4,
      name: "Anime Glass Painting",
      discountPrice: "$19.99",
      discountPercent: "20% Off",
      originalPrice: "$24.99",
      images: [product1, product2, product3],
    },
    {
      id: 5,
      name: "Custom T-Shirt Design",
      discountPrice: "$24.99",
      discountPercent: "25% Off",
      originalPrice: "$32.99",
      images: [product1, product3, product2],
    },
    {
      id: 6,
      name: "Digital Art Print",
      discountPrice: "$12.99",
      discountPercent: "30% Off",
      originalPrice: "$18.99",
      images: [product2, product4, product1],
    },
    {
      id: 7,
      name: "Study Planner",
      discountPrice: "$8.99",
      discountPercent: "40% Off",
      originalPrice: "$14.99",
      images: [product3, product1, product4],
    },
    {
      id: 8,
      name: "Handmade Jewelry Set",
      discountPrice: "$29.99",
      discountPercent: "15% Off",
      originalPrice: "$34.99",
      images: [product4, product3, product2],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-grow">
        <section >
          <h1 className="text-5xl font-bold text-center mb-12 mt-25 text-gray-800 font-['JetBrains_Mono']">
            One-Time-Only{" "}
            <span className="text-blue-600 font-extrabold">Deals!</span>
          </h1>
        </section>

        <section className="max-w-[1400px] mx-auto px-2">
          <div className="mb-12">
            <div className="deals-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0px!important' }}>
              <div className="deals-header mb-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  Featured <span className="text-blue-600">Deals</span>
                </h2>
              </div>
              <div style={{ width: '100%', maxWidth: '1200px' }}>
                <div id="item1">
                  <div className="main-container" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', padding: '10px 0' }}>
                    {featuredDeals.map((product) => (
                      <div key={product.id} className="main">
                        <div className="image-carousel">
                          <img src={product.images[0]} alt={product.name} className="active" />
                        </div>
                        <img src={heartIcon} className="heartIcon" alt="Add to favorites" />
                        <div className="details">
                          <p>{product.name}</p>
                          <h3>
                            <span className="discount-price">{product.discountPrice}</span>
                            <span className="discount-container">{product.discountPercent}</span>
                            <span className="original-price">{product.originalPrice}</span>
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="deals-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="deals-header mb-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  Popular <span className="text-blue-600">Deals</span>
                </h2>
              </div>
              <div style={{ width: '100%', maxWidth: '1200px' }}>
                <div id="item1">
                  <div className="main-container" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', padding: '10px 0' }}>
                    {popularDeals.map((product) => (
                      <div key={product.id} className="main">
                        <div className="image-carousel">
                          <img src={product.images[0]} alt={product.name} className="active" />
                        </div>
                        <img src={heartIcon} className="heartIcon" alt="Add to favorites" />
                        <div className="details">
                          <p>{product.name}</p>
                          <h3>
                            <span className="discount-price">{product.discountPrice}</span>
                            <span className="discount-container">{product.discountPercent}</span>
                            <span className="original-price">{product.originalPrice}</span>
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OneTimeOnlyDeals; 