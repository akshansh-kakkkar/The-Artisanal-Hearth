import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserForm from "./components/UserForm";
import PizzaOrder from "./components/PizzaOrder";
import Cart from "./components/Cart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registrationform" element={<UserForm />} />
        <Route path='/pizza-menu' element={<PizzaOrder />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
