// import React from "react";
// import { Link } from "react-router";

// const AppCard = ({ singleApp }) => {
//     const { id, image, title, companyName, description, ratingAvg } = singleApp;

//     return (
//         <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition-all">
//             <img
//                 src={image}
//                 alt={title}
//                 className="w-full h-48 object-cover rounded-lg mb-3"
//             />
//             <h3 className="text-xl font-bold">{title}</h3>
//             <p className="text-gray-600 text-sm mb-2">{companyName}</p>
//             <p className="text-gray-500 text-sm mb-3 line-clamp-2">{description}</p>
//             <div className="flex justify-between items-center">
//                 <span className="text-yellow-500 font-semibold">⭐ {ratingAvg}</span>
//                 <Link
//                     to={`/apps/${id}`}
//                     className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700"
//                 >
//                     View Details
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default AppCard;

import React from "react";


const AppCard = ({ singleApp }) => {
    const { image, title, description, downloads, ratingAvg, reviews } = singleApp;

    return (
        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            {/* Top: Image + Title + Description */}
            <div className="flex items-center gap-4 mb-3">
                <img
                    src={image}
                    alt={title}
                    className="w-20 h-20 object-cover rounded-lg border"
                />
                <div>
                    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-600">{description.slice(0, 60)}...</p>
                </div>
            </div>

            {/* Bottom: Downloads (left) + Rating (right) */}
            <div className="flex justify-between items-center border-t pt-3 mt-auto text-gray-700">
                {/* Left: Downloads */}
                <div className="flex items-center gap-2 text-sm font-medium">

                    <span>{downloads.toLocaleString()} Downloads</span>
                </div>

                {/* Right: Rating */}
                <div className="flex items-center gap-1 text-sm font-semibold">

                    <span>{ratingAvg}</span>

                </div>
            </div>
        </div>
    );
};

export default AppCard;

