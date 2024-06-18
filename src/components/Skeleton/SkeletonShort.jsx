import React from "react";

function SkeletonShort({ item }) {
  return (
    <div className="flex flex-col cursor-pointer gap-2">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="rounded-lg transition-all ease-in-out delay-150"
      />
      <div className="flex flex-col h-full">
        <h5 className="font-semibold line-clamp-2">{item.title}</h5>
        <p className="text-sm text-gray-300 font-medium">{item.views} views</p>
      </div>
    </div>
  );
}

export default SkeletonShort;
