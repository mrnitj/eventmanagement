
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SigninPage/Signinpage";
import LoginPage from "./pages/LoginPage/LoginPage";
import OrganizerHomePage from "./pages/OrganizerHomePage/OrganizerHomePage";
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage";
import VenueDetails from "./pages/OrganizerHomePage/venueDetails";







function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/organizer" element={<OrganizerHomePage/>} />
        <Route path="/admin" element={< AdminHomePage/>} />
        <Route path="/organizer/venue/:id" element={<VenueDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
