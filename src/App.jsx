
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SigninPage/Signinpage";
import LoginPage from "./pages/LoginPage/LoginPage";
import OrganizerHomePage from "./pages/OrganizerHomePage/OrganizerHomePage";
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage";
import UserHomePage from "./pages/UserHomePage/UserHomePage";
import VenueDetails from "./pages/OrganizerHomePage/venueDetails";
import UserEvents from "./pages/UserHomePage/UserEvents";







function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/organizer" element={<OrganizerHomePage/>} />
        <Route path="/admin" element={< AdminHomePage/>} />
        <Route path="/organizer/venue/:id" element={<VenueDetails/>}></Route>
        <Route path="/user" element={< UserHomePage/>} />
        <Route path="/user/events" element={< UserEvents/>} />
      </Routes>
    </div>
  );
}

export default App;
