import UserProfile from "../components/User/UserProfile";
import { Input } from "../components/ui/Input";
import { motion } from "framer-motion";
import { useState } from "react";

const AddListing = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");

  // Helper function to capitalize the first letter of each word
  const capitalizeFirstLetter = (str) => {
    if (!str) return str; // Return the string as is if it's empty
    return str.charAt(0).toUpperCase() + str.slice(1); // Capitalize the first letter
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/6 h-screen shadow-black shadow-lg ">
        <div className="!m-4">
          <button>
            <i className="material-icons !p-2 !m-2 border-3 border-gray-600 rounded-3xl">
              close
            </i>
          </button>
          <p className=" ">Seller listing</p>
          <p className=" font-bold text-3xl">Items for sale</p>
          <div>
            <UserProfile username={"Place Holder"} />
            <div className="h-[200px] flex flex-row !m-3 justify-center items-center gap-2 text-center">
              <motion.button
                whileHover={{
                  scale: 1.075,
                  backgroundColor: "#D1D5DB",
                  transition: "0.5s",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="  w-1/2 h-[150px] border-black border-2 rounded"
              >
                <i className="material-icons !p-1 bg-[#b8bbbe] rounded-lg">
                  photo_library
                </i>
                <p>Add photos</p>{" "}
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.075,
                  backgroundColor: "#D1D5DB",
                  transition: "0.5s",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="  w-1/2 h-[150px] border-black border-2 rounded"
              >
                <i className="material-icons !p-1 bg-[#b8bbbe] rounded-lg">
                  videocam
                </i>
                <p>Add videos</p>{" "}
              </motion.button>
            </div>
            <p className="font-bold">Required</p>
            <p className="font-light">Try and be descriptive</p>
            <div className="flex-col flex gap-8">
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border-black "
              />
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="border-black "
              />

              {/* Dropdown Menu for category selection */}
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border-black !p-2 rounded-md w-full"
                >
                  <option value="">Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home">Home</option>
                  <option value="toys">Toys</option>
                  <option value="sports">Sports</option>
                </select>
              </div>

              {/* Dropdown Menu for condition selection */}
              <div className="relative">
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="border-black !p-2 rounded-md w-full"
                >
                  <option value="">Select Condition</option>
                  <option value="new">New</option>
                  <option value="open-box">Open-Box</option>
                  <option value="used">Used</option>
                  <option value="for-parts">For Parts</option>
                </select>
              </div>

              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="border-black h-[300px] text-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 h-screen flex items-center justify-center bg-slate-300 ">
        <div className="flex items-center  h-[90vh] w-[90vh] bg-s-200 relative ">
          <p className="absolute top-4 left-4 font-bold text-xl"> Preview</p>
          <div className="flex items-center !m-3 justify-center h-3/4 w-2/3 border-gray-400 border-2 rounded">
            <p className="text-center max-w-[50vh]">
              Whatever pictures you add will show up here so that you can see
              what the buyer sees.
            </p>
          </div>
          <div className="flex flex-col !m-3 h-3/4 w-1/3 border-gray-400 border-2 rounded">
            <p className="!m-2 text-xl font-bold"> {title || "Title"}</p>
            <p className="!mx-3"> {price || "Price"}</p>
            <p className="!mx-3 font-bold">
              {" "}
              {capitalizeFirstLetter(category) || "Category"}
            </p>
            <p className="!mx-3 ">
              {" "}
              {capitalizeFirstLetter(condition) || "Condition"}
            </p>
            <p className="!mx-3 "> {description || "Description"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
