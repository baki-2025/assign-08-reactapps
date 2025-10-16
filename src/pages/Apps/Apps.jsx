import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";

const Apps = () => {
    const [apps, setApps] = useState([]);
    const [filteredApps, setFilteredApps] = useState([]);
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("none");

    
    useEffect(() => {
        fetch("/appsData.json")
            .then((res) => res.json())
            .then((data) => {
                setApps(data);
                setFilteredApps(data);
            })
            .catch((err) => console.error("Error loading apps:", err));
    }, []);

    
    useEffect(() => {
        const result = apps.filter((app) =>
            app.title.toLowerCase().includes(search.toLowerCase()) ||
            app.companyName.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredApps(result);
    }, [search, apps]);

    
    useEffect(() => {
        let sorted = [...filteredApps];
        if (sortOrder === "high") {
            sorted.sort((a, b) => b.ratingAvg - a.ratingAvg);
        } else if (sortOrder === "low") {
            sorted.sort((a, b) => a.ratingAvg - b.ratingAvg);
        }
        setFilteredApps(sorted);
    }, [sortOrder]);

    return (
        <div className="bg-gray-100 text-black min-h-screen p-6">
            <h1 className="text-3xl text-center font-bold mb-2">
                Our All Applications
            </h1>
            <p className="text-xl text-center mb-6">
                Explore all apps developed by us — search, filter, and discover easily.
            </p>

            {/* 🔍 Search + Sort Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 max-w-5xl mx-auto">
                <input
                    type="text"
                    placeholder="Search apps by name or company..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="none">Sort by Rating</option>
                    <option value="high">High → Low</option>
                    <option value="low">Low → High</option>
                </select>
            </div>
            
            {filteredApps.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredApps.map((app) => (
                        <AppCard key={app.id} singleApp={app} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 text-lg mt-10">
                    No apps found matching your search 😢
                </p>
            )}
        </div>
    );
};

export default Apps;
