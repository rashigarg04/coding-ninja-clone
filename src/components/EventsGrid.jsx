import React, { useState } from "react";

const events = [
    {
        id: 1,
        title: "React Bootcamp",
        date: "25 Jan 2026",
        type: "Live Workshop",
        image: "https://img.freepik.com/free-vector/react-native-banner_23-2148683156.jpg",
    },
    {
        id: 2,
        title: "DSA Mega Contest",
        date: "30 Jan 2026",
        type: "Contest",
        image: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
    },
    {
        id: 3,
        title: "Career Guidance Webinar",
        date: "2 Feb 2026",
        type: "Webinar",
        image: "https://img.freepik.com/free-vector/online-meeting-concept-illustration_114360-4764.jpg",
    },
];

export default function EventsGrid() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <>
            <section id="events" className="py-12 px-6 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Upcoming Events
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-44 object-cover"
                            />

                            <div className="p-4">
                                <span className="text-sm text-blue-600 font-semibold">
                                    {event.type}
                                </span>

                                <h3 className="text-lg font-bold mt-1">
                                    {event.title}
                                </h3>

                                <p className="text-gray-600 text-sm mt-1">
                                    {event.date}
                                </p>

                                <button
                                    onClick={() => setSelectedEvent(event)}
                                    className="mt-4 w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* REGISTER MODAL */}
            {selectedEvent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-[90%] max-w-md">
                        <h3 className="text-2xl font-bold mb-2">
                            Register for
                        </h3>

                        <p className="text-orange-600 font-semibold mb-4">
                            {selectedEvent.title}
                        </p>

                        <form className="space-y-3">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border px-3 py-2 rounded-lg"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border px-3 py-2 rounded-lg"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full border px-3 py-2 rounded-lg"
                            />

                            <button
                                type="submit"
                                className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                            >
                                Submit Registration
                            </button>

                            <button
                                type="button"
                                onClick={() => setSelectedEvent(null)}
                                className="w-full py-2 border rounded-lg"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
