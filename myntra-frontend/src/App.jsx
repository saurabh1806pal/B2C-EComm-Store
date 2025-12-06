import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingSpinner.jsx";
// Headless Component Export
import FetchItems from "./routes/FetchItems.jsx";

import { Outlet } from "react-router-dom";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  // console.log(fetchStatus); // Placeholder to avoid unused variable warning
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching && <LoadingScreen />}
      {!fetchStatus.currentlyFetching && <Outlet />}
      <Footer />
    </>
  );
}

export default App;
