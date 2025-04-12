import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Mobile toggle sidebar button */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Outlet />
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-900 w-64 text-white fixed md:relative right-0 h-full transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:translate-x-0 z-20`}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
