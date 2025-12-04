import { useLoaderData } from "react-router-dom";
import ItemCard from "./HomeItem";
import { useSelector } from "react-redux";

const ItemList = () => {
  const items = useSelector((state) => state.items);
  console.log("Items in ItemList:", items);
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
