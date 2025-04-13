import React, { useState } from "react";
import profile1 from "../assets/profile1.jpg";

// Star Rating Component from Reviews file
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`}>★</span>
      ))}
      {hasHalfStar && <span>★</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300">
          ★
        </span>
      ))}
    </div>
  );
};

// Individual review card from Reviews file
const ReviewCard = ({ review }) => {
  const [isHelpful, setIsHelpful] = useState(false);

  return (
    <div className="border-b border-gray-200 !py-4">
      <div className="flex items-start !mb-2">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 !mr-2">
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="font-medium text-sm">{review.name}</div>
        </div>
      </div>

      <div className="flex items-center !mb-1">
        <StarRating rating={review.rating} />
        <span className="!ml-2 text-sm font-medium text-gray-700">
          {review.title || `Rated ${review.rating} out of 5 stars`}
        </span>
      </div>

      <div className="text-xs text-gray-500 !mb-2">
        Reviewed on {review.date}
      </div>

      {review.verified && (
        <div className="!mb-2">
          <span className="text-xs text-orange-700 font-medium">
            ✓ Verified Purchase
          </span>
        </div>
      )}

      <p className="text-sm text-gray-800 !mb-3">{review.comment}</p>

      <div className="text-xs text-gray-600">
        <button
          onClick={() => setIsHelpful(!isHelpful)}
          className={`!mr-3 !px-2 !py-1 border border-gray-300 rounded ${
            isHelpful ? "bg-gray-100" : "bg-white"
          }`}
        >
          {isHelpful ? "Helpful ✓" : "Helpful?"}
        </button>
        <span className="!mr-3">|</span>
        <button className="text-gray-600 hover:text-gray-800">Report</button>
      </div>
    </div>
  );
};

// Star selector with hover effect for review form
const StarSelector = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Helper function to check if a star should be filled
  const isStarFilled = (starIndex) => {
    if (hoverRating >= starIndex) return true;
    if (!hoverRating && selectedRating >= starIndex) return true;
    return false;
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <button
          key={starIndex}
          type="button"
          onClick={() => {
            console.log(`Setting rating to ${starIndex}`);
            setSelectedRating(starIndex);
          }}
          onMouseEnter={() => setHoverRating(starIndex)}
          onMouseLeave={() => setHoverRating(0)}
          className="text-3xl focus:outline-none !mx-1 first:!ml-0"
          style={{
            color: isStarFilled(starIndex) ? "#f59e0b" : "#d1d5db",
            cursor: "pointer",
          }}
          aria-label={`Rate ${starIndex} star${starIndex !== 1 ? "s" : ""}`}
        >
          ★
        </button>
      ))}
      {selectedRating > 0 && (
        <span className="!ml-3 text-sm text-gray-600">
          {selectedRating} star{selectedRating !== 1 ? "s" : ""}
        </span>
      )}
    </div>
  );
};

// Reviews section component modified to fit within the product page
const ReviewsSection = ({ reviews, productTitle }) => {
  const [sortOption, setSortOption] = useState("newest");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewFormData, setReviewFormData] = useState({
    title: "",
    comment: "",
  });

  let sortedReviews = [...reviews];
  if (sortOption === "highest") {
    sortedReviews.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "lowest") {
    sortedReviews.sort((a, b) => a.rating - b.rating);
  }

  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        ).toFixed(1)
      : 0;

  // Calculate percentage for each star level (5 to 1)
  const ratingPercentages = [];
  for (let i = 5; i >= 1; i--) {
    const count = reviews.filter((r) => Math.floor(r.rating) === i).length;
    const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
    ratingPercentages.push({ stars: i, percentage });
  }

  return (
    <div className="bg-white !p-4 border border-gray-200 rounded-lg !mt-8">
      <h2 className="text-xl font-bold !mb-4" id="customer-reviews">
        Customer Reviews for {productTitle}
      </h2>

      {/* Overall Rating */}
      <div className="flex flex-col md:flex-row !mb-6">
        <div className="md:w-1/3">
          <div className="flex items-baseline">
            <span className="text-orange-500 text-2xl font-bold">
              {avgRating}
            </span>
            <span className="text-sm text-gray-600 !ml-1">out of 5</span>
          </div>
          <StarRating rating={parseFloat(avgRating)} />
          <div className="text-sm text-gray-600 !mt-1">
            {reviews.length} global ratings
          </div>
        </div>

        {/* Rating bars */}
        <div className="md:w-2/3">
          {ratingPercentages.map(({ stars, percentage }) => (
            <div key={stars} className="flex items-center !mb-1">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-orange-500 hover:underline !mr-2"
              >
                {stars} star
              </a>
              <div className="flex-1 h-4 bg-gray-200 rounded-sm !mr-2">
                <div
                  className="h-4 bg-orange-400 rounded-sm"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-sm text-gray-600 w-8">
                {Math.round(percentage)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Write a review button */}
      <div className="!mb-6">
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium !py-1 !px-4 rounded-sm border border-yellow-600 shadow-sm"
        >
          Write a customer review
        </button>
      </div>

      {/* Review form */}
      {showReviewForm && (
        <div className="!mb-8 !p-6 border border-gray-200 rounded-lg bg-gray-50">
          <h4 className="text-lg font-semibold !mb-4">Share Your Experience</h4>
          <div className="!mb-4">
            <label className="block text-gray-700 text-sm font-medium !mb-2">
              Rating
            </label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="text-2xl text-gray-300 hover:text-yellow-400 focus:outline-none"
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div className="!mb-4">
            <label className="block text-gray-700 text-sm font-medium !mb-2">
              Review Title
            </label>
            <input
              type="text"
              className="w-full !px-3 !py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Summarize your experience"
              value={reviewFormData.title}
              onChange={(e) =>
                setReviewFormData({ ...reviewFormData, title: e.target.value })
              }
            />
          </div>
          <div className="!mb-4">
            <label className="block text-gray-700 text-sm font-medium !mb-2">
              Review
            </label>
            <textarea
              className="w-full !px-3 !py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="What did you like or dislike?"
              value={reviewFormData.comment}
              onChange={(e) =>
                setReviewFormData({
                  ...reviewFormData,
                  comment: e.target.value,
                })
              }
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="!px-4 !py-2 bg-gray-200 text-gray-700 rounded !mr-2 hover:bg-gray-300"
              onClick={() => {
                setShowReviewForm(false);
                setReviewFormData({ title: "", comment: "" });
              }}
            >
              Cancel
            </button>
            <button
              className="!px-4 !py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => {
                alert("Review submitted successfully!");
                setShowReviewForm(false);
                setReviewFormData({ title: "", comment: "" });
              }}
            >
              Submit Review
            </button>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="border-t border-gray-300 !my-4"></div>

      {/* Reviews header */}
      <div className="flex justify-between items-center !mb-4">
        <h3 className="font-bold">Customer Feedback</h3>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 !mr-2">Sort by:</span>
          <select
            className="text-sm border border-gray-300 rounded !p-1"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="newest">Most recent</option>
            <option value="highest">Highest rated</option>
            <option value="lowest">Lowest rated</option>
          </select>
        </div>
      </div>

      {/* Reviews */}
      <div>
        {sortedReviews.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        ))}
      </div>

      {/* Load more button */}
      {sortedReviews.length > 3 && (
        <div className="!mt-4 text-center">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium !py-1 !px-4 rounded border border-gray-300">
            See more reviews
          </button>
        </div>
      )}
    </div>
  );
};

// Tag Components - Modified to be used above the title
const TrendingTag = () => (
  <div className="inline-block bg-purple-600 text-white text-xs font-bold !px-2 !py-1 rounded-full shadow-md !mr-2">
    TRENDING
  </div>
);

const DealTag = ({ discount = "20" }) => (
  <div className="inline-block bg-green-600 text-white text-xs font-bold !px-2 !py-1 rounded-full shadow-md !mr-2">
    DEAL
  </div>
);

// Main Product Component
const CombinedProductComponent = ({ productData = {} }) => {
  const {
    storeName = "Flower Queen Shop",
    rating = 4.5,
    reviewCount = 5,
    profileImage = profile1,
    title = "Beautiful Flower Bouquet",
    price = 49.99,
    originalPrice = 69.99,
    description = "This gorgeous arrangement features a mix of seasonal flowers in a stunning display. Perfect for any occasion, this bouquet will brighten any space with its vibrant colors and delightful fragrance.",
    isTrending = true,
    isOnSale = true,
    discountPercentage = 29,
  } = productData;

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Sample image URLs
  const images = [
    "https://i.etsystatic.com/47099982/r/il/b44d0a/6457097646/il_794xN.6457097646_12cs.jpg",
    "https://i.etsystatic.com/47099982/r/il/389768/6640824699/il_794xN.6640824699_o56q.jpg",
    "https://i.etsystatic.com/47099982/r/il/6fac99/6599077304/il_794xN.6599077304_jrpr.jpg",
    "https://i.etsystatic.com/47099982/r/il/733b25/6748751083/il_794xN.6748751083_dbvm.jpg",
  ];

  // Button Component
  const Button = ({ label, onClick, primary = true }) => {
    return (
      <button
        className={`!px-4 !py-2 ${
          primary
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        } rounded-md transition`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };

  // QuantitySelector Component
  const QuantitySelector = ({ quantity, setQuantity }) => {
    return (
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <select
          className="!mt-1 block w-full !p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    );
  };

  // ImageLayout Component
  const ImageLayout = ({ width, height, src }) => {
    return (
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: "#e5e5e5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#666",
          fontSize: "14px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundImage: src ? `url(${src})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {!src && `${width} x ${height}`}
      </div>
    );
  };

  // ProfilePicture Component
  const ProfilePicture = ({ imageSrc }) => {
    const profileImage = imageSrc || profile1;
    return (
      <div className="relative">
        {/* Gradient ring container */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-900 to-amber-400 !p-0.5 !-m-0.5"></div>
        {/* White padding between image and gradient */}
        <div className="absolute inset-0 rounded-full bg-white !p-0.5"></div>
        {/* Profile image */}
        <div className="relative">
          <img
            src={profileImage}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover border border-white"
          />
        </div>
      </div>
    );
  };

  // Compact StoreHeader Component
  const StoreHeader = () => {
    return (
      <div className="flex items-center !space-x-3">
        <ProfilePicture imageSrc={profileImage} />
        <div>
          <h2 className="font-medium text-sm">{storeName}</h2>
          <div className="flex items-center text-xs">
            <div className="flex text-yellow-500">
              {Array.from({ length: Math.floor(rating) }).map((_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
            <span className="text-gray-600 !ml-1">
              {rating.toFixed(1)} ({reviewCount})
            </span>
            <a
              href="#customer-reviews"
              className="!ml-2 text-blue-500 hover:underline text-xs"
            >
              View Reviews
            </a>
          </div>
        </div>
      </div>
    );
  };

  // ProductImages Component - Removed tags from here
  const ProductImages = () => {
    return (
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                style={{
                  cursor: "pointer",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow:
                    selectedImage === index
                      ? "0 4px 8px rgba(0,0,0,0.2)"
                      : "none",
                  transition: "box-shadow 0.2s ease",
                }}
              >
                <ImageLayout width={60} height={60} src={image} />
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <ImageLayout width={500} height={400} src={images[selectedImage]} />
        </div>
      </div>
    );
  };

  // Product Card Component with price display modifications for sales
  const ProductCard = () => {
    return (
      <div className="bg-white !p-6 rounded-lg !shadow-lg w-full">
        {/* Tags added above the title */}
        <div className="!mb-2">
          {isTrending && <TrendingTag />}
          {isOnSale && <DealTag />}
        </div>

        <h2 className="text-xl font-bold">{title}</h2>

        {/* Modified price display */}
        {isOnSale ? (
          <div className="!mt-2">
            <p className="text-green-600 font-bold text-xl">
              ${price.toFixed(2)}
            </p>
            <div className="flex items-center gap-2">
              <p className="line-through text-gray-500">
                ${originalPrice.toFixed(2)}
              </p>
              <span className="text-red-500 font-medium text-sm">
                Save {discountPercentage}%
              </span>
            </div>
          </div>
        ) : (
          <p className="text-gray-700 text-xl">${price.toFixed(2)}</p>
        )}

        <div className="!mt-4">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
        <div className="flex !mt-4 !space-x-2">
          <Button label="Add to Cart" onClick={() => alert("Added to cart")} />
          <Button label="Check Out" onClick={() => alert("Checkout")} />
        </div>
      </div>
    );
  };

  // ReturnPolicy Component
  const ReturnPolicy = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
      <div className="!mt-4 border border-gray-300 rounded">
        <div
          onClick={toggleExpand}
          className="flex justify-between items-center !p-3 cursor-pointer bg-gray-100 hover:bg-gray-200"
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "") {
              toggleExpand();
              e.preventDefault();
            }
          }}
        >
          <span className="font-medium">Return Policy</span>
          <span className="text-xl">{isExpanded ? "-" : "+"}</span>
        </div>

        <div className={`${isExpanded ? "block" : "hidden"} !p-3 bg-white`}>
          <h4 className="font-medium !mb-2">Conditions:</h4>
          <ul className="list-disc !pl-5 !mb-3 text-sm">
            <li>Items must be returned within 30 days.</li>
            <li>Items must be in original packaging and unused.</li>
            <li>Proof of purchase needed.</li>
          </ul>
          <h4 className="font-medium mb-2">Return Process:</h4>
          <ul className="list-disc !pl-5 !mb-3 text-sm">
            <li>Contact customer support.</li>
            <li>Receive a return label.</li>
            <li>Ship the item back.</li>
          </ul>
          <h4 className="font-medium !mb-2">Need Help?</h4>
          <p className="text-sm">Email: person@fiu.edu</p>
        </div>
      </div>
    );
  };

  // ProductDescription Component
  const ProductDescription = () => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded(!expanded);

    return (
      <div className="!mt-4 border border-gray-300 rounded">
        <div
          onClick={toggleExpanded}
          className="flex justify-between items-center !p-3 cursor-pointer bg-gray-100 hover:bg-gray-200"
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleExpanded();
              e.preventDefault();
            }
          }}
        >
          <span className="font-medium">Description</span>
          <span className="text-xl">{expanded ? "-" : "+"}</span>
        </div>

        <div className={`${expanded ? "block" : "hidden"} !p-3 bg-white`}>
          <h4 className="font-medium !mb-2">{title} Details</h4>
          <p className="!mb-2">{description}</p>
        </div>
      </div>
    );
  };

  // Sample review data
  const sampleReviews = [
    {
      name: "Alice Johnson",
      rating: 5,
      title: "Excellent quality, worth every penny!",
      comment:
        "Absolutely love this product! The quality is exceptional and it exceeded all my expectations. The attention to detail is impressive, and it works exactly as described. Highly recommend it to anyone looking for a reliable solution!",
      date: "March 15, 2025",
      verified: true,
    },
    {
      name: "Bob Smith",
      rating: 4,
      title: "Good product, fast shipping",
      comment: "Pretty good overall. Works as expected and shipping was fast.",
      date: "March 14, 2025",
      verified: true,
    },
    {
      name: "Cathy Lee",
      rating: 4.5,
      title: "Beautiful design",
      comment: "The design is beautiful! Just what I was looking for.",
      date: "March 13, 2025",
      verified: false,
    },
    {
      name: "David Wang",
      rating: 3,
      title: "Decent but had setup issues",
      comment:
        "Decent product but had some issues with setup. Customer service was helpful though.",
      date: "March 12, 2025",
      verified: true,
    },
    {
      name: "Emma Davis",
      rating: 5,
      title: "Will buy again!",
      comment: "Fantastic! Will definitely buy again.",
      date: "March 10, 2025",
      verified: true,
    },
  ];

  // Main Component Render
  return (
    <div className="!px-5 max-w-6xl !mx-auto !py-6">
      <div className="flex flex-col">
        {/* Image section with side-by-side layout */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3 flex flex-col">
            {/* Product Images at the top of left column without tags */}
            <ProductImages />

            {/* Store header below images in left column */}
            <div className="!mt-4">
              <StoreHeader />
            </div>
          </div>

          <div className="md:w-1/3 flex flex-col">
            {/* Product card in right column - now with tags above title */}
            <div className="flex-grow">
              <ProductCard />
            </div>

            {/* Product Description */}
            <ProductDescription />

            {/* Return Policy */}
            <ReturnPolicy />
          </div>
        </div>

        {/* Reviews Section - Full width below product details */}
        <ReviewsSection reviews={sampleReviews} productTitle={title} />
      </div>
    </div>
  );
};

export default CombinedProductComponent;
