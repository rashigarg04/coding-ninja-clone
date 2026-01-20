import React, { useState } from "react";

const courses = [
    {
        id: 1,
        name: "Full Stack Web Development",
        image: "https://pcilearning.com/wp-content/uploads/2019/12/full_stack_web_2.jpg",
        description: "Become a complete web developer from frontend to backend.",
        modules: ["HTML & CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
        id: 2,
        name: "Data Science",
        image: "https://img.freepik.com/premium-photo/blue-logo-with-graphic-data-data_895622-2475.jpg",
        description: "Learn data analysis, visualization, and statistics.",
        modules: ["Python", "Pandas", "NumPy", "Data Visualization"],
    },
    {
        id: 3,
        name: "Machine Learning",
        image: "https://img.freepik.com/premium-vector/machine-learning-banner_35632-100.jpg",
        description: "Master ML algorithms and real-world applications.",
        modules: ["Supervised ML", "Unsupervised ML", "Model Evaluation"],
    },
];

export default function CoursesGrid() {
    const [selectedCourse, setSelectedCourse] = useState(null);

    return (
        <>
            <section id="courses" className="py-10 px-6 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Our Courses
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            onClick={() => setSelectedCourse(course)}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            <img
                                src={course.image}
                                alt={course.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">
                                    {course.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {selectedCourse && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-[90%] max-w-lg">
                        <h3 className="text-2xl font-bold mb-2">
                            {selectedCourse.name}
                        </h3>

                        <p className="text-gray-600 mb-4">
                            {selectedCourse.description}
                        </p>

                        <ul className="list-disc list-inside mb-4">
                            {selectedCourse.modules.map((m, i) => (
                                <li key={i}>{m}</li>
                            ))}
                        </ul>

                        <button
                            onClick={() => setSelectedCourse(null)}
                            className="w-full py-2 border rounded-lg"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
