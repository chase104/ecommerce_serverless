import { useEffect } from "react";
import "./App.css";
import Auth from "./pages/Auth";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductPage from "./pages/ProductPage";
import { useSelector } from "react-redux";

function App() {
  let user = useSelector((state) => state.user.value);
  let apiEndpoint = useSelector((state) => state.metadata.apiEndpoint);
  useEffect(() => {
    // eventually we will check for a current session here and possibly set user if there is one
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
