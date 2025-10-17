import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const AppDetails = () => {
    const { id } = useParams();
    const [app, setApp] = useState(null);

    useEffect(() => {
        fetch("/appsData.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.id === Number(id));
                setApp(found);
            });
    }, [id]);

    if (!app) return <p className="text-center p-6">Loading details...</p>;

    return (
        <div className="p-8 bg-gray-50 min-h-screen text-black">
            <div className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-xl">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h2 className="text-3xl font-bold mb-2">{app.title}</h2>
                <p className="text-gray-600 mb-2">by {app.companyName}</p>
                <p className="text-gray-700 mb-4">{app.description}</p>
                <p className="text-yellow-500 font-semibold mb-4">
                    ⭐ Average Rating: {app.ratingAvg}
                </p>
                <button
                    onClick={() => alert("App installed successfully!")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Install App
                </button>
            </div>
        </div>
    );
};

export default AppDetails;


