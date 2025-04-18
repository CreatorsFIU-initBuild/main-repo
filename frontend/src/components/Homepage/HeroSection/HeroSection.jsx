// HeroSection.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import aiLogo from "../../../assets/aiLogo.png";
import "./heroSection.css";
import searchIcon from "../../../assets/search_icon.png"; // Make sure path is correct

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/some-path"); // replace with your actual route
  };
  // Handle search on input change
  const handleSearch = async (e) => {
    const userQuery = e.target.value;
    setQuery(userQuery); // Update query state

    if (userQuery) {
      try {
        // Perform the search query
        const searchResults = await index.search(userQuery);
        setResults(searchResults.hits); // Update the results state
      } catch (error) {
        console.error("Search error:", error);
      }
    } else {
      setResults([]); // Clear results when query is empty
    }
  };

  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
          <button className="search-icon-button">
            <img src={searchIcon} alt="Search" className="search-icon" />
          </button>
          <button className="ai-button">
            <img src={aiLogo} className="ai-icon" />
          </button>
        </div>

        {/* Display search results */}
        {results.length > 0 && (
          <div className=" cursor-pointer search-results bg-slate-300 overflow-y-auto grid grid-cols-1 max-h-96 rounded-xl">
            {results.map((result) => (
              <motion.div
                key={result.id}
                className=" border-b-1 search-result  text-black"
                whileHover={{ scale: 1.02, backgroundColor: "#D3D3D3" }}
                whileTap={{ scale: 0.75 }}
                onClick={handleClick}
              >
                <p className="!mx-3 !mt-3 !text-2xl">{result.title}</p>
                <p className=" !mx-3 !text-lg font-bold">{result.category}</p>
                <p className="!mx-3">${result.price}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
