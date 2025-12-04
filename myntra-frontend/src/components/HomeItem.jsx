import React from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaTruck,
  FaUndo,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const renderStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;

  for (let i = 0; i < full; i++) {
    stars.push(<FaStar key={i} className="text-yellow-400" />);
  }

  if (half) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  }

  while (stars.length < 5) {
    stars.push(<FaRegStar key={stars.length} className="text-gray-300" />);
  }

  return stars;
};

const ProductCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={item.image}
          alt={item.item_name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          {item.discount_percentage}% OFF
        </div>

        {/* Verified Badge */}
        <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg">
          <MdVerified className="text-lg" />
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Brand Name */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            {item.company}
          </h3>
        </div>

        {/* Product Name */}
        <h2 className="text-base font-semibold text-gray-800 mb-3 line-clamp-2 min-h-12">
          {item.item_name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
            <span className="text-sm font-bold text-green-700">
              {item.rating.stars}
            </span>
            <FaStar className="text-green-600 text-xs" />
          </div>
          <span className="text-sm text-gray-500">
            ({item.rating.count.toLocaleString()})
          </span>
        </div>

        {/* Price Section */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-bold text-gray-900">
              ₹{item.current_price}
            </span>
            <span className="text-base line-through text-gray-400">
              ₹{item.original_price}
            </span>
          </div>
          <p className="text-sm text-green-600 font-semibold">
            You save ₹{item.original_price - item.current_price}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-4"></div>

        {/* Delivery & Return Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaTruck className="text-blue-500 shrink-0" />
            <span>
              Delivery by{" "}
              <span className="font-semibold text-gray-800">
                {item.delivery_date}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaUndo className="text-orange-500 shrink-0" />
            <span>{item.return_period} days return available</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full mt-5 bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
