import React from "react";

const CartCard = ({ item }) => {
  return (
    <div className="p-6 bg-gray-50">
      <div className="space-y-4">
        <div
          key={item.id}
          className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {/* Product Image */}
          <div className="w-32 h-32 bg-gray-200">
            <img
              src={item.image}
              alt={item.item_name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150?text=Product";
              }}
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                {item.company}
              </p>
              <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                {item.item_name}
              </h3>
            </div>

            <div className="flex items-center justify-between">
              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">
                  ₹{item.current_price}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{item.original_price}
                </span>
                <span className="text-xs font-semibold text-green-600">
                  {item.discount_percentage}% OFF
                </span>
              </div>

              {/* Delivery Date */}
              <div className="text-right">
                <p className="text-xs text-gray-500">Delivery by</p>
                <p className="text-sm font-semibold text-gray-700">
                  {item.delivery_date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
