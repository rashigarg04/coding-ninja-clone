import React, { useState } from "react";

const mcqData = {
    "JavaScript Basics": [
        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            options: ["var", "int", "string", "float"],
            answer: "var",
        },
        {
            question: "Which symbol is used for comments in JavaScript?",
            options: ["//", "/* */", "#", "<!-- -->"],
            answer: "//",
        },
    ],

    "React Components": [
        {
            question: "What is used to pass data to a component?",
            options: ["state", "props", "hooks", "context"],
            answer: "props",
        },
    ],
};

export default function PracticeMCQ({ topic, onClose }) {
    const questions = mcqData[topic] || [];
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState("");
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleNext = () => {
        if (selected === questions[current].answer) {
            setScore(score + 1);
        }

        setSelected("");

        if (current + 1 < questions.length) {
            setCurrent(current + 1);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90%] max-w-lg">
                {!showResult ? (
                    <>
                        <h3 className="text-xl font-bold mb-4">
                            {topic} – Question {current + 1}
                        </h3>

                        <p className="font-semibold mb-3">
                            {questions[current].question}
                        </p>

                        {questions[current].options.map((option) => (
                            <label
                                key={option}
                                className="block border rounded-lg px-4 py-2 mb-2 cursor-pointer hover:bg-gray-100"
                            >
                                <input
                                    type="radio"
                                    name="option"
                                    value={option}
                                    checked={selected === option}
                                    onChange={() => setSelected(option)}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}

                        <button
                            onClick={handleNext}
                            disabled={!selected}
                            className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold mb-4">
                            Practice Completed 🎉
                        </h3>

                        <p className="text-lg mb-4">
                            Score: {score} / {questions.length}
                        </p>

                        <button
                            onClick={onClose}
                            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        >
                            Close
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
