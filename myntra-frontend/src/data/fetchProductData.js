export const fetchProductData = () => {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      // console.log("Fetched product data:", data);
      return data.products;
    })
    .catch((error) => {
      console.error("Error fetching product data:", error);
      return [];
    });
};
