import React from "react";
import downloadsIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";

const AppCard = ({ singleApp }) => {
    const { image, title, rating } = singleApp;

    return (
        <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full relative">
            {/* Top: Image + Title */}
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={image}
                    alt=""
                    className="w-20 h-20 object-cover rounded-lg border"
                />
                <h3 className=" text-gray-900">{title}</h3>
            </div>

            {/* Optional middle spacing (content area) */}
            <div className="flex-grow"></div>

            {/* Bottom: Downloads + Rating */}
            <div className="absolute bottom-3 left-0 right-0 px-5">
                <div className="flex justify-between items-center border-t pt-3 text-gray-700">
                    {/* Downloads */}
                    <div className="flex items-center gap-2 text-sm font-medium">
                        <img src={downloadsIcon} alt="downloads" className="w-5 h-5" />
                        <span>9M</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-yellow-500">
                        <img src={ratingsIcon} alt="rating" className="w-5 h-5" />
                        <span>{rating || "5"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;
