import { FaMessage } from "react-icons/fa6";
import { FaHeart, FaShareAlt } from "react-icons/fa";

const ProductCard = (props) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white border border-gray-300 shadow-md shadow-gray-500/50 rounded-xl overflow-hidden items-center md:items-start justify-start p-4 md:p-5">
      {/* Product Image */}
      <div className="relative w-28 h-28 md:w-48 md:h-48 flex-shrink-0">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover transition duration-150 rounded-md"
          loading="lazy"
          src={props.productImage}
          alt={props.productName}
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-1">
          <p className="text-lg md:text-xl font-bold">{props.productName}</p>
          <p className="text-xs md:text-sm text-gray-500">
            {props.productType} | {props.price}
          </p>
        </div>

        {/* Seller Info */}
        <div className="flex my-2 items-center gap-2">
          <img
            src={props.sellerProfilePicture}
            alt="seller-profile-picture"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
          <p className="text-gray-500 text-xs md:text-sm">
            Saved from{" "}
            <span className="text-black underline cursor-pointer">
              {props.sellerName}
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-2 md:mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center cursor-pointer px-3 py-2 text-sm md:text-base">
            <FaMessage size={18} color="white" className="mr-2" />
            Message Seller
          </button>
          <button className="rounded-md bg-gray-300 hover:bg-gray-400 cursor-pointer px-3 py-2 text-sm md:text-base">
            <FaShareAlt size={18} />
          </button>
          <button className="rounded-md bg-gray-300 hover:bg-gray-400 cursor-pointer px-3 py-2 text-sm md:text-base">
            <FaHeart size={18} color="red" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Favorites = () => {
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
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto py-5">
      <div className="px-6 w-full">
        <h1 className="text-6xl ml-12 mt-8">Wishlist</h1>
        <div className="ml-24 mt-12 flex flex-col gap-5">
          {mockData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
