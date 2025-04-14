import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserProfile from "../../components/User/UserProfile";

export default function SellerDash() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen relative">
      {/* Conditionally render UserProfile only when sidebar is closed */}
      {!isSidebarOpen && (
        <div className="fixed top-5 right-5 z-50">
          <UserProfile
            username={"Place Holder"}
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
      )}

      {/* Main Content (Expands) */}
      <div className="flex-1 bg-gray-100 !p-4 flex items-center justify-center">
        <h1 className="text-3xl font-semibold">
          Welcome to the Seller Dashboard
        </h1>
      </div>

      {/* Blurry Background Overlay (Only when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar with exit animation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-70 bg-slate-600/70 backdrop-blur-md text-white flex flex-col items-center !p-6 shadow-lg z-50"
          >
            {/* Sidebar Profile (Optional) */}
            <div className="fixed top-5 right-5 z-50">
              <UserProfile
                username={"Place Holder"}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
              />
            </div>

            <p className="text-xl font-light !mt-5 !pt-5">Admin Dashboard</p>

            {/* Sidebar Items */}
            <div className="flex flex-col gap-4 w-full !mt-6 items-center">
              <motion.div
                className="!p-3 w-[80%] rounded-lg cursor-pointer !mt-3"
                whileHover={{ backgroundColor: "#D3D3D3" }}
              >
                Users
              </motion.div>
              <motion.div
                className="!p-3 w-[80%] rounded-lg cursor-pointer"
                whileHover={{ backgroundColor: "#D3D3D3" }}
              >
                Orders
              </motion.div>
              <motion.div
                className="!p-3 w-[80%] rounded-lg cursor-pointer"
                whileHover={{ backgroundColor: "#D3D3D3" }}
              >
                Reports
              </motion.div>
            </div>

            {/* Logout Button */}
            <button
              className="bg-red-500 text-white !p-3 w-[80%] rounded !mb-3 !mt-auto"
              onClick={() => setIsSidebarOpen(false)}
            >
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
