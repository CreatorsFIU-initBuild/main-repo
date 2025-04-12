const ProductCard = (props) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white border border-gray-300 shadow-md shadow-gray-500/50 rounded-xl overflow-hidden items-center md:items-start justify-between !p-4 md:!p-5">
      <div className="flex gap-5">
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
          <div className="flex !my-2 items-center gap-2">
            <img
              src={props.sellerProfilePicture}
              alt="seller-profile-picture"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            />
            <p className="text-gray-500 text-xs md:text-sm">
              Purchased from{" "}
              <span className="text-black underline cursor-pointer">
                {props.sellerName}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {/* Buttons */}
        <button className="text-white !bg-[#0d6efd] hover:!bg-[#0b5ed7] rounded-lg !py-3 !px-15 cursor-pointer">
          Buy Again
        </button>
        <button className="bg-gray-200 hover:bg-gray-400 hover:text-white rounded-lg !py-3 !px-15 cursor-pointer">
          Shop similar
        </button>
      </div>
    </div>
  );
};

const OrderDetails = ({ products }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <p className="font-bold">Order # 4376</p>
          <p className="text-gray-500">Delivered on January 22, 2021</p>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-blue-600 hover:underline cursor-pointer">
            Manage order
          </p>
          <p className="text-blue-600 hover:underline cursor-pointer">
            View Invoice
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            productName={product.productName}
            productType={product.productType}
            price={product.price}
            sellerName={product.sellerName}
            sellerProfilePicture={product.sellerProfilePicture}
            productImage={product.productImage}
          />
        ))}
      </div>
    </div>
  );
};

const PurchaseHistory = () => {
  const mockData = [
    {
      orderNum: "4376",
      orderDate: "January 22, 2021",
      products: [
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
      ],
    },
    {
      orderNum: "4134",
      orderDate: "January 5, 2021",
      products: [
        {
          productName: "Custom Insulated Water Bottle",
          productType: "Personalized",
          price: "$39.99",
          sellerName: "John Doe",
          sellerProfilePicture:
            "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
          productImage:
            "https://media1.popsugar-assets.com/files/thumbor/5lHj7Nu7jEUxVTVorqMTicG5Ovo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/11/17/020/n/1922441/34e18eaca8f3391a_netimgNAl5QD/i/Personalized-Insulated-Water-Bottle.jpg",
        },
      ],
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto !py-5">
      <div className="!px-6 !ml-12 !mt-8">
        <h1 className="!text-6xl">Your Orders</h1>
        <p className="text-gray-500 !mt-2">
          Check the status of recent orders, manage returens, and discover
          similar products.
        </p>
      </div>
      <div className="!px-6 !ml-24 !mt-12">
        <div className="flex flex-col gap-10">
          {mockData.map((order, index) => (
            <OrderDetails key={index} products={order.products} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;
