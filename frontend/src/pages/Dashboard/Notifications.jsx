import React from 'react';

const Notifications = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      
      {/* Sample notifications - you can replace these with real data later */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">New Order Received</h3>
              <p className="text-gray-600 text-sm">Someone purchased your item</p>
            </div>
            <span className="text-xs text-gray-500">2 hours ago</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Price Drop Alert</h3>
              <p className="text-gray-600 text-sm">An item in your wishlist is now on sale</p>
            </div>
            <span className="text-xs text-gray-500">1 day ago</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">New Message</h3>
              <p className="text-gray-600 text-sm">You have a new message from a seller</p>
            </div>
            <span className="text-xs text-gray-500">2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications; 