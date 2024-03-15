import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">
        {overview.slice(0, 250) + "..."}
      </p>
      <div className="my-4 md:m-0">
        <button className="py-1 px-3 md:py-3 md:px-12 bg-white text-black text-xl rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="hidden md:inline-block mx-2 py-3 px-12 bg-gray-500 text-white text-xl rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faCircleInfo} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
