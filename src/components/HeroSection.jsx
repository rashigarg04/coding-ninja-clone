// HeroSection.jsx
import React from "react";
import heroImage from "../assets/hero-image.png";

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Left Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        Be a Coding Ninja
                        <br />
                        <span className="text-black">
                            with Top Career Courses
                        </span>
                    </h1>

                    <p className="text-lg mb-8 text-orange-100">
                        Learn coding with structured courses, live mentorship,
                        doubt support, and placement assistance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition">
                            Explore Courses
                        </button>
                        <button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition">
                            Free Trial
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src={heroImage}
                        alt="Coding Ninjas Hero"
                        className="w-full max-w-md drop-shadow-2xl"
                    />
                </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-white text-black py-8">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                        <h3 className="text-3xl font-bold">1M+</h3>
                        <p className="text-gray-600">Learners</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">50+</h3>
                        <p className="text-gray-600">Courses</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">1400+</h3>
                        <p className="text-gray-600">Hiring Partners</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
