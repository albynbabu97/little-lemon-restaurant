import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Bookingpage from "./pages/Bookingpage";
import ConfirmationPage from "./pages/ConfirmationPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Bookingpage />} path="/bookings" />
        <Route element={<ConfirmationPage />} path="/confirmation" />
        <Route element={<Navigate to="/" />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
