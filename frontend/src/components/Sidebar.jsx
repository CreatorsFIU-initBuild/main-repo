import { NavLink } from "react-router-dom";
import {
  FaHeart,
  FaHistory,
  FaRegUserCircle,
  FaShoppingCart,
  FaSignOutAlt,
  FaArrowLeft,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="!p-4 flex flex-col h-full">
      <div className="!mb-6">
        <NavLink to="/" className="flex items-center text-white hover:text-gray-300 mb-12">
          <FaArrowLeft className="mr-2 " />
          <span className="text-xs">Back to Home</span>
        </NavLink>
        <h2 className="font-medium text-center !my-6 text-3xl">John Doe</h2>
      </div>

      <nav className="flex flex-col">
        <div>
          <p>Buyer</p>
          <NavLink
            to="/dashboard/favorites"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white rounded flex items-center"
                : "text-gray-300 hover:bg-gray-700 hover:text-white rounded flex items-center"
            }
            style={{
              padding: "0.75rem 1rem",
              textDecoration: "none",
              color: "white",
              margin: "1rem 0",
            }}
          >
            <FaHeart style={{ marginRight: "0.5rem" }} />
            Favorites
          </NavLink>
          <NavLink
            to="/dashboard/cart"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white rounded flex items-center"
                : "text-gray-300 hover:bg-gray-700 hover:text-white rounded flex items-center"
            }
            style={{
              padding: "0.75rem 1rem",
              textDecoration: "none",
              color: "white",
              margin: "1rem 0",
            }}
          >
            <FaShoppingCart style={{ marginRight: "0.5rem" }} />
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/history"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 text-white rounded flex items-center"
                : "text-gray-300 hover:bg-gray-700 hover:text-white rounded flex items-center"
            }
            style={{
              padding: "0.75rem 1rem",
              textDecoration: "none",
              color: "white",
              margin: "1rem 0",
            }}
          >
            <FaHistory style={{ marginRight: "0.5rem" }} />
            Purchase History
          </NavLink>
        </div>
      </nav>

      <div className="flex flex-col gap-5 !mt-auto">
        <NavLink
          className="w-full bg-gray-400 hover:bg-gray-500 text-white rounded flex items-center justify-center cursor-pointer"
          style={{ padding: "0.5rem 1rem" }}
          to="/dashboard/profile"
        >
          <FaRegUserCircle style={{ marginRight: "0.5rem" }} />
          <span>Manage Profile</span>
        </NavLink>

        <button
          className="w-full bg-red-500 hover:bg-red-600 text-white rounded flex items-center justify-center cursor-pointer"
          style={{ padding: "0.5rem 1rem" }}
        >
          <FaSignOutAlt style={{ marginRight: "0.5rem" }} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
