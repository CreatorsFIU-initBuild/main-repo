import { useState } from "react";

const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (update) => {
    if (quantity + update < 0) setQuantity(0);
    else if (quantity + update > 5) setQuantity(5);
    else setQuantity(quantity + update);
  };

  return (
    <div className="flex flex-col gap-1 bg-white border border-gray-300 shadow-md shadow-gray-500/50 rounded-xl overflow-hidden p-5">
      {/* Seller Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={props.sellerProfilePicture}
            alt="seller-profile-picture"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <p className="text-gray-500 text-sm md:text-base">
            Sold by{" "}
            <span className="text-black underline cursor-pointer">
              {props.sellerName}
            </span>
          </p>
        </div>
        <p className="text-gray-500">Price</p>
      </div>

      {/* Product Content */}
      <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
        {/* Product Image */}
        <div className="relative w-28 h-28 sm:w-48 sm:h-48 flex-shrink-0">
          <img
            className="w-full h-full object-cover transition duration-150 rounded-md"
            loading="lazy"
            src={props.productImage}
            alt={props.productName}
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col gap-1.5">
              <p className="text-lg md:text-xl font-bold">
                {props.productName}
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                Category:{" "}
                <span className="hover:underline cursor-pointer">
                  {props.productType}
                </span>
              </p>
              <p className="text-xs md:text-sm text-gray-500">ETA: 2-3 days</p>
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="isGift" id="isGift" />
                <label className="text-xs md:text-sm" htmlFor="isGift">
                  This is a gift
                </label>
              </div>
            </div>
            <p className="text-lg md:text-xl font-bold">{props.price}</p>
          </div>

          {/* Quantity & Remove Button */}
          <div className="flex gap-4 mt-3 sm:mt-12">
            <div className="p-2 bg-white rounded-[170px] border border-[#a0a0a0] justify-around items-center flex">
              <svg
                width="14"
                height="15"
                className="cursor-pointer"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleQuantityChange(-1)}
              >
                <path
                  d="M2.33398 7.5H11.6673"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span className="w-10 text-center text-[#191919] text-base font-normal leading-normal">
                {quantity}
              </span>
              <svg
                className="cursor-pointer relative"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleQuantityChange(1)}
              >
                <path
                  d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666V2.83331Z"
                  stroke="#1A1A1A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <button className="text-blue-600 hover:underline bg-transparent cursor-pointer border-none p-0">
              Delete
            </button>
            <button className="text-blue-600 hover:underline bg-transparent cursor-pointer border-none p-0">
              Favorite
            </button>
            <button className="text-blue-600 hover:underline bg-transparent cursor-pointer border-none p-0">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const mockData = [
    {
      productName: "Bluetooth Headphones",
      productType: "Electronics",
      price: "$49.99",
      sellerName: "John Doe",
      sellerProfilePicture:
        "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
      productImage:
        "https://i5.walmartimages.com/asr/78ff8e5b-5570-4eb2-8ca0-422e4a64d51e.a392ad46e96f707de61a5547318e70d1.jpeg",
      quantity: 1,
    },
    {
      productName: "House Plant",
      productType: "Indoors",
      price: "$29.99",
      sellerName: "John Doe",
      sellerProfilePicture:
        "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
      productImage:
        "https://i.pinimg.com/originals/8d/6d/61/8d6d61c4c526b781b4884174684109a2.jpg",
      quantity: 1,
    },
    {
      productName: "Bluetooth Headphones",
      productType: "Electronics",
      price: "$49.99",
      sellerName: "John Doe",
      sellerProfilePicture:
        "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
      productImage:
        "https://i5.walmartimages.com/asr/78ff8e5b-5570-4eb2-8ca0-422e4a64d51e.a392ad46e96f707de61a5547318e70d1.jpeg",
      quantity: 1,
    },
    {
      productName: "House Plant",
      productType: "Indoors",
      price: "$29.99",
      sellerName: "John Doe",
      sellerProfilePicture:
        "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
      productImage:
        "https://i.pinimg.com/originals/8d/6d/61/8d6d61c4c526b781b4884174684109a2.jpg",
      quantity: 1,
    },
  ];
  return (
    <div className="flex-1 overflow-y-auto py-5">
      <div className="px-6 w-full">
        <h1 className="text-6xl ml-12 mt-8">Shopping Cart</h1>
        <div className="ml-24 mt-12 flex flex-col gap-5 pb-10">
          {mockData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
          <div className="flex justify-end font-bold text-xl">
            Subtotal ({mockData.length} item{mockData.length > 1 && "s"}): $
            {mockData
              .reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0)
              .toFixed(2)}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button class="bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-semibold text-lg p-3 rounded-lg shadow-md transition duration-300 cursor-pointer">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
