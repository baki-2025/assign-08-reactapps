import React from "react";
import { Link } from "react-router";

const AppCard = ({ singleApp }) => {
    const { id, image, title, companyName, description, ratingAvg } = singleApp;

    return (
        <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition-all">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 text-sm mb-2">{companyName}</p>
            <p className="text-gray-500 text-sm mb-3 line-clamp-2">{description}</p>
            <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-semibold">⭐ {ratingAvg}</span>
                <Link
                    to={`/apps/${id}`}
                    className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default AppCard;
