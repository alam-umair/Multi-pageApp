import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./componens/Products";
import Welcome from "./componens/Welcome";
import MainHeader from "./componens/MainHeader";
import ProductDetail from "./componens/Pages/ProductDetail";

const App = () => {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
