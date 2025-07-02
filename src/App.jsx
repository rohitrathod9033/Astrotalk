// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./MyComponents/Navbar";
import Footer from './MyComponents/Footer';

import HomePage from "./pages/HomePage";
import FreeKundliPage from "./pages/FreeKundliPage";
import KundliMatchingPage from "./pages/KundliMatchingPage";
import CompatibilityPage from "./pages/CompatibilityPage";
import CalculatorsPage from "./pages/CalculatorsPage";
import HoroscopesPage from "./pages/HoroscopesPage";
import ChatWithAstrologerPage from "./pages/ChatWithAstrologerPage";

import LoveRelationshipsPage from "./pages/LoveRelationshipsPage";
import CareerFinancePage from "./pages/CareerFinancePage";
import HealthWellnessPage from "./pages/HealthWellnessPage";
import NumerologyCalculator from "./pages/NumerologyCalculator";
import DailyHoroscope from "./pages/DailyHoroscope";
import WeeklyHoroscope from "./pages/WeeklyHoroscope";
import BookPooja from "./pages/book-pooja";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/free-kundli" element={<FreeKundliPage />} />
        <Route path="/kundli-matching" element={<KundliMatchingPage />} />
        <Route path="/compatibility" element={<CompatibilityPage />} />
        <Route path="/calculators/love-calculator" element={<CalculatorsPage />} />
            <Route path="/calculators/numerology-calculator" element={<NumerologyCalculator />} />
        <Route path="/horoscopes" element={<HoroscopesPage />} />
          <Route path="/horoscopes/DailyHoroscope" element={<DailyHoroscope />} />
            <Route path="/horoscopes/WeeklyHoroscope" element={<WeeklyHoroscope />} />
        
        <Route path="//book-a-pooja" element={<BookPooja />} />
        <Route path="/chat-with-astrologer" element={<ChatWithAstrologerPage />} />
       
        <Route path="/blogs/love-relationships" element={<LoveRelationshipsPage />} />
        <Route path="/blogs/career-finance" element={<CareerFinancePage />} />
        <Route path="/blogs/health-wellness" element={<HealthWellnessPage />} />

   
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
