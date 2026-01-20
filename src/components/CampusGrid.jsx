// CampusGrid.jsx
import React from "react";

const campuses = [
    {
        id: 1,
        name: "IIT Delhi",
        image: "https://home.iitd.ac.in/public/storage/uploads/IITD_1713248055.jpg",
    },
    {
        id: 2,
        name: "IIT Bombay",
        image: "https://fl-i.thgim.com/public/society/8fbpn4/article69112445.ece/alternates/FREE_1200/IIT%20Bombay.jpg",
    },
    {
        id: 3,
        name: "NIT Trichy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsULbA2Q5QD05VX-u13nZfqWvcH9cWmgIdgw&s",
    },
    {
        id: 4,
        name: "BITS Pilani",
        image: "https://careermantra.org/front_assets/images/BITS-PIlani.jpg",
    },
    {
        id: 5,
        name: "Delhi University",
        image: "https://d8it4huxumps7.cloudfront.net/bites/wp-content/uploads/2018/06/25473_DU_New.jpg?d=1200x800",
    },
    {
        id: 6,
        name: "VIT Vellore",
        image: "https://i.ytimg.com/vi/JA3t27eBL3M/mqdefault.jpg",
    },
];

export default function CampusGrid() {
    return (
        <section id="campus" className="py-12 px-6 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">
                Our Campus Partners
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
                {campuses.map((campus) => (
                    <div
                        key={campus.id}
                        className="bg-gray-100 p-4 rounded-lg flex items-center justify-center hover:shadow-md transition"
                    >
                        <img
                            src={campus.image}
                            alt={campus.name}
                            className="h-16 object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
