import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserForm from "./components/UserForm";
import PizzaOrder from "./components/PizzaOrder";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registrationform" element={<UserForm />} />
        <Route path='/pizza-menu' element={<PizzaOrder />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
