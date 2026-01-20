import React, { useState } from "react";
import PracticeMCQ from "./PracticeMCQ";

const practiceTopics = [
    {
        id: 1,
        name: "JavaScript Basics",
        image: "https://img.icons8.com/color/96/javascript.png",
        description: "Variables, loops, functions, and core JS concepts",
    },
    {
        id: 2,
        name: "React Components",
        image: "https://img.icons8.com/color/96/react-native.png",
        description: "JSX, props, state, hooks, and component structure",
    },
    {
        id: 3,
        name: "Data Structures",
        image: "https://img.icons8.com/color/96/data-configuration.png",
        description: "Arrays, stacks, queues, linked lists, trees",
    },
    {
        id: 4,
        name: "Algorithms",
        image: "https://static.vecteezy.com/system/resources/previews/012/991/085/large_2x/algorithm-icon-illustration-for-graphic-and-web-design-free-vector.jpg",
        description: "Sorting, searching, recursion, greedy methods",
    },
    {
        id: 5,
        name: "SQL Queries",
        image: "https://img.icons8.com/color/96/sql.png",
        description: "SELECT, JOIN, GROUP BY, subqueries",
    },
    {
        id: 6,
        name: "Python Programming",
        image: "https://img.icons8.com/color/96/python.png",
        description: "Basics, loops, functions, OOP in Python",
    },
];

export default function PracticeGrid() {
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [startMCQ, setStartMCQ] = useState(false);

    return (
        <>
            <section id="practice" className="py-10 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Practice Topics
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {practiceTopics.map((topic) => (
                        <div
                            key={topic.id}
                            className="bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center p-4"
                        >
                            <img
                                src={topic.image}
                                alt={topic.name}
                                className="mx-auto mb-4 w-24 h-24 object-contain"
                            />

                            <h3 className="text-lg font-semibold">
                                {topic.name}
                            </h3>

                            <button
                                onClick={() => setSelectedTopic(topic)}
                                className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            >
                                Start Practice
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* TOPIC DETAILS MODAL */}
            {selectedTopic && !startMCQ && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center">
                        <img
                            src={selectedTopic.image}
                            alt={selectedTopic.name}
                            className="mx-auto w-20 h-20 mb-3"
                        />

                        <h3 className="text-2xl font-bold mb-2">
                            {selectedTopic.name}
                        </h3>

                        <p className="text-gray-600 mb-4">
                            {selectedTopic.description}
                        </p>

                        <button
                            onClick={() => setStartMCQ(true)}
                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-2"
                        >
                            Begin Practice
                        </button>

                        <button
                            onClick={() => setSelectedTopic(null)}
                            className="w-full py-2 border rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* MCQ MODAL */}
            {startMCQ && selectedTopic && (
                <PracticeMCQ
                    topic={selectedTopic.name}
                    onClose={() => {
                        setStartMCQ(false);
                        setSelectedTopic(null);
                    }}
                />
            )}
        </>
    );
}
