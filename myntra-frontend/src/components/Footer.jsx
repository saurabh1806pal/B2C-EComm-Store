const Footer = () => {
  const links = [
    "Men",
    "Women",
    "Kids",
    "Home & Living",
    "Beauty",
    "Gift Card",
    "Myntra Insider",
  ];

  return (
    <footer className="w-full bg-gray-100 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[1, 2, 3].map((col) => (
          <div key={col}>
            <h3 className="text-lg font-semibold mb-4">ONLINE SHOPPING</h3>
            <ul className="space-y-2 text-gray-700">
              {links.map((item, idx) => (
                <li key={idx} className="hover:text-black cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t py-4 text-center text-gray-600 text-sm">
        © 2023 www.myntra.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
