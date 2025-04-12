import { motion } from "framer-motion";

function FAQ() {
  return (
    <section className="h-screen bg-[#FCFFFD] pt-20">
      <div className="h-full flex flex-col">
        <div className=" h-1/4 bg-[#B5A642]  m-10 rounded-xl rounded-b-none flex flex-col justify-center items-center p-20">
          <h1 className="  text-5xl font-extrabold text-center ">
            How can we help ?
          </h1>
          <input
            placeholder="Type your question here"
            className=" text-l mt-5 rounded-full text-center  w-1/3  p-3 border-4 border-black"
          />
        </div>
        <div className=" -mt-10 h-1/4  flex-col border-4 border-[#B5A642] m-10 rounded-xl flex justify-center items-center p-20 rounded-t-none">
          <p className="text-xl font-thin -mt-20 pt-5">
            Issues with your order
          </p>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.25, backgroundColor: "#D3D3D3" }}
            className="w-1/5 p-3  rounded-full border-4 border-gray-700 shadow-lg "
          >
            Get Help with your order
          </motion.button>
        </div>
        <div className="flex items-center justify-center ">
          <h1> Featured Articles</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 p-5 ">
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05, backgroundColor: "#D3D3D3" }}
            className="w-full p-5  rounded-xl flex flex-col items-center shadow-lg"
          >
            <span className="text-lg font-bold">Seaching for items</span>
            <span className="text-m text-gray-500 mt-1">
              How to search and buy items on CreatorsFIU
            </span>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05, backgroundColor: "#D3D3D3" }}
            className="w-full p-5  rounded-xl flex flex-col items-center shadow-lg"
          >
            <span className="text-lg font-bold">Making a purchase</span>
            <span className="text-km text-gray-500 mt-1">
              How to complete your order safely
            </span>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05, backgroundColor: "#D3D3D3" }}
            className="w-full p-5  rounded-xl flex flex-col items-center shadow-lg"
          >
            <span className="text-lg font-bold">Tracking your order</span>
            <span className="text-km text-gray-500 mt-1">
              How to check your delivery status
            </span>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05, backgroundColor: "#D3D3D3" }}
            className="w-full p-5  rounded-xl flex flex-col items-center shadow-lg"
          >
            <span className="text-lg font-bold">Return policy</span>
            <span className="text-km text-gray-500 mt-1">
              How to return an item and get a refund
            </span>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05, backgroundColor: "#D3D3D3" }}
            className="w-full p-5  rounded-xl flex flex-col items-center shadow-lg"
          >
            <span className="text-lg font-bold">Listing an item</span>
            <span className="text-km text-gray-500 mt-1">
              How to create a listing and start selling
            </span>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05, backgroundColor: "#D3D3D3" }}
            className="w-full p-5  rounded-xl flex flex-col items-center shadow-lg"
          >
            <span className="text-lg font-bold">Seller fees</span>
            <span className="text-m text-gray-500 mt-1">
              Are there any costs for selling items?
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  ); // Empty div (or remove it entirely)
}

export default FAQ;
