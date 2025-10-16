import React, { useEffect, useState } from "react";
import AppCard from "../../components/AppCard/AppCard";


const MyInstallation = () => {
    const [installedApps, setInstalledApps] = useState([]);

    // ✅ Load installed apps from localStorage
    useEffect(() => {
        const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(savedApps);
    }, []);

    // ✅ Uninstall handler
    const handleUninstall = (id) => {
        const updatedApps = installedApps.filter((app) => app.id !== id);
        setInstalledApps(updatedApps);
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold text-center mb-6">
                My Installed Applications
            </h2>

            {installedApps.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {installedApps.map((app) => (
                        <div
                            key={app.id}
                            className="relative group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
                        >
                            <AppCard singleApp={app} />
                            {/* Uninstall button overlay */}
                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600 text-lg">
                    You haven’t installed any apps yet 😅
                </p>
            )}
        </div>
    );
};

export default MyInstallation;
