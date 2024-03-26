
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SigninPage/Signinpage";
import LoginPage from "./pages/LoginPage/LoginPage";
import OrganizerHomePage from "./pages/OrganizerHomePage/OrganizerHomePage";
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage";







function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/organizer" element={<OrganizerHomePage/>} />
        <Route path="/admin" element={< AdminHomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
