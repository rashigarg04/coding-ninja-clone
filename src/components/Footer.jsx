// Footer.jsx
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white">Coding Ninjas</h2>
                    <p className="text-sm mt-3">
                        Learn coding from industry experts. Build skills for your future.
                    </p>
                </div>

                {/* Courses */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Courses</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Full Stack Development</li>
                        <li>Data Science</li>
                        <li>Machine Learning</li>
                        <li>Competitive Programming</li>
                    </ul>
                </div>

                {/* Practice */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Practice</h3>
                    <ul className="space-y-2 text-sm">
                        <li>DSA Problems</li>
                        <li>Mock Interviews</li>
                        <li>Contests</li>
                        <li>Guided Paths</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                © 2026 Coding Ninjas. All rights reserved.
            </div>
        </footer>
    );
}
