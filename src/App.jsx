// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoursesGrid from "./components/CoursesGrid";
import PracticeGrid from "./components/PracticeGrid";
import EventsGrid from "./components/EventsGrid";
import CampusGrid from "./components/CampusGrid";
import Footer from "./components/Footer";


export default function App() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <HeroSection />
            <CoursesGrid />
            <PracticeGrid />
            <EventsGrid />
            <CampusGrid />
            <Footer />
        </div>
    );
}
