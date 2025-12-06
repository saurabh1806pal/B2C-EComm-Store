import CartCard from "./BagOrderItem";
import OrderSummary from "./BagOrderSummary";
import { useSelector } from "react-redux";

function Bag() {
  const items = useSelector((state) => state.items);
  const bagItem = useSelector((state) => state.bag);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Bag</h1>
          <p className="text-gray-600 mt-2">{items.length} items in your bag</p>
        </div>

        {/* Main Layout Container */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          {/* Left Section - Cart Items */}
          <div className="flex-1 lg:w-2/3">
            <div className="space-y-4">
              {finalItems.map((item) => (
                <CartCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-6">
              <OrderSummary items={finalItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bag;
