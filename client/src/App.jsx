import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Auth from "./pages/Auth";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./pages/ProductPage";
import { useSelector } from "react-redux";

function App() {
  let user = useSelector((state) => state.user.value);
  useEffect(() => {
    axios("https://4437y2tox5.execute-api.us-east-1.amazonaws.com/")
      .then(console.log)
      .catch(console.error);
    axios("https://4437y2tox5.execute-api.us-east-1.amazonaws.com/two")
      .then(console.log)
      .catch(console.error);
  }, []);

  if (!user) return <Auth />;
  return (
    // basic react router dom routing for pages
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
