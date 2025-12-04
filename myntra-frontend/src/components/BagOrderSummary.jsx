const OrderSummary = ({ items }) => {
  const totalMRP = items.reduce((sum, item) => sum + item.original_price, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.current_price, 0);
  const totalDiscount = totalMRP - totalPrice;
  const convenienceFee = 99;
  const finalAmount = totalPrice + convenienceFee;

  return (
    <div className="flex justify-center bg-gray-50 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
          Price Details
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center text-base">
            <span className="text-gray-600">Total MRP</span>
            <span className="text-gray-800 font-medium">
              ₹{totalMRP.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center text-base">
            <span className="text-gray-600">Discount on MRP</span>
            <span className="text-green-600 font-semibold">
              -₹{totalDiscount.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center text-base">
            <span className="text-gray-600">Convenience Fee</span>
            <span className="text-gray-800 font-medium">₹{convenienceFee}</span>
          </div>

          <div className="border-t-2 pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-800">
                Total Amount
              </span>
              <span className="text-2xl font-bold text-gray-900">
                ₹{finalAmount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <button className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
          Place Order
        </button>

        <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-sm text-center text-green-700 font-semibold">
            🎉 You saved ₹{totalDiscount.toLocaleString()} on this order!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
