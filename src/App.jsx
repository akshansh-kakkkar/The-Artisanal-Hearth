import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import UserForm from "./components/UserForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registrationform" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
