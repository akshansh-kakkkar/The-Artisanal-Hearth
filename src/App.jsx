import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserForm from "./components/UserForm";
import PizzaOrder from "./components/PizzaOrder";
import Cart from "./components/Cart";
import OrderCompletion from "./components/OrderCompletion";
import { Toaster } from "react-hot-toast";
import Loading from "./components/Loading";
function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Loading />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registrationform" element={<UserForm />} />
        <Route path="/pizza-menu" element={<PizzaOrder />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-completed" element={<OrderCompletion />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

