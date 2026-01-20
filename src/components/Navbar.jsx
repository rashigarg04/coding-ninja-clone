import { useState } from "react";
import AuthModal from "./AuthModal";

export default function Navbar() {
    const [showCourses, setShowCourses] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showMobileCourses, setShowMobileCourses] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <nav className="w-full bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <a href="#home" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 text-white font-bold flex items-center justify-center rounded">
                        CN
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        Coding Ninjas
                    </span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10 text-gray-700 dark:text-gray-200 font-medium text-sm">

                    {/* Courses Dropdown */}
                    <li
                        className="relative cursor-pointer"
                        onMouseEnter={() => setShowCourses(true)}
                        onMouseLeave={() => setShowCourses(false)}
                    >
                        <span className="hover:text-orange-500">Courses</span>

                        {showCourses && (
                            <div className="absolute top-12 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg border z-50">
                                <ul className="py-2">
                                    {[
                                        "Data Structures & Algorithms",
                                        "Full Stack Web Development",
                                        "Machine Learning",
                                        "Competitive Programming",
                                    ].map((course) => (
                                        <li
                                            key={course}
                                            className="px-4 py-2 hover:bg-orange-50 dark:hover:bg-gray-700 cursor-pointer"
                                        >
                                            {course}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>

                    <li><a href="#practice" className="hover:text-orange-500">Practice</a></li>
                    <li><a href="#events" className="hover:text-orange-500">Events</a></li>
                    <li><a href="#campus" className="hover:text-orange-500">Campus</a></li>
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => setShowAuth(true)}
                        className="bg-orange-500 text-white px-4 py-2 rounded"
                    >
                        Login
                    </button>

                    <button
                        onClick={toggleDarkMode}
                        className="text-xl"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl dark:text-white"
                    onClick={() => setMobileMenu(!mobileMenu)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenu && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t shadow-sm">
                    <ul className="flex flex-col p-6 gap-5 text-gray-700 dark:text-gray-200 text-sm font-medium">

                        <li
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setShowMobileCourses(!showMobileCourses)}
                        >
                            Courses <span>{showMobileCourses ? "▲" : "▼"}</span>
                        </li>

                        {showMobileCourses && (
                            <ul className="pl-4 flex flex-col gap-2">
                                <li>DSA</li>
                                <li>Full Stack</li>
                                <li>Machine Learning</li>
                                <li>Competitive Programming</li>
                            </ul>
                        )}

                        <li><a href="#practice">Practice</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#campus">Campus</a></li>

                        <hr />

                        <li onClick={() => setShowAuth(true)}>Login</li>
                        <li
                            onClick={toggleDarkMode}
                            className="text-xl"
                        >
                            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                        </li>
                    </ul>
                </div>
            )}

            <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
        </nav>
    );
}
