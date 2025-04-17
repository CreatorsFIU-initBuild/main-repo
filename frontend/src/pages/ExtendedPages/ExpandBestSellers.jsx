import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductSection from "../../components/Homepage/ProductSection/ProductSection";

const ExpandBestSellers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main
        className="flex-grow bg-[url('/src/assets/hero_idea_12.png')] bg-no-repeat bg-top bg-cover"
        style={{ backgroundAttachment: "fixed", backgroundSize: "100% auto" }}
      >
        {/* Banner image and text */}
        <div className="w-full h-135 flex justify-center items-end bg-[url('src/assets/best_sellers_banner.png')] bg-no-repeat bg-cover bg-center">
          <div className="flex flex-col gap-3 justify-center items-center bg-white opacity-90 h-fit rounded-2xl !-m-5 !py-10 !px-15">
            <h1
              className="font-bold  md:!text-4xl lg:!text-5xl text-center"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Campus Bestsellers
            </h1>
            <p className="font-bold !text-lg">
              Shop products from our top sellers.
            </p>
          </div>
        </div>
        {/* Whole content wrapper */}
        <div className="flex flex-col">
          <ProductSection sectionType="bestSellers" />
          <ProductSection sectionType="bestSellers" />
          <ProductSection sectionType="bestSellers" />
        </div>

        {/* Pagination separated with proper padding and margin */}
        <div className="!px-6 sm:!px-10 md:!px-16 !mt-24 !mb-20">
          <div className="font-mono text-left">
            <p className="!mb-6 !text-lg md:!text-xl font-semibold">
              There is much more for you to discover
            </p>

            <div className="flex items-center gap-2 flex-wrap">
              <button className="w-8 h-8 !text-sm rounded-full border border-black hover:bg-black hover:text-white transition-all">
                ❮
              </button>

              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <button
                  key={num}
                  className="w-8 h-8 !text-sm rounded-full hover:bg-black hover:text-white transition-all border border-transparent"
                >
                  {num}
                </button>
              ))}

              <span className="!mx-2 text-lg">…</span>

              <button className="w-8 h-8 !text-sm rounded-full border border-black hover:bg-black hover:text-white transition-all">
                ❯
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExpandBestSellers;
