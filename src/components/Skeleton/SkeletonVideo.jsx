import React from "react";

//ICONS
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

function SkeletonVideo({ item }) {
  return (
    <div className="flex flex-col cursor-pointer">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="rounded-lg hover:rounded-none transition-all ease-in-out delay-150"
      />
      <div className="flex gap-5 items-start mt-3">
        <img
          src={item.channel_logo}
          alt={item.title}
          className="rounded-full"
        />
        <div className="w-full flex flex-col gap-1">
          <p className="font-semibold line-clamp-2">{item.title}</p>
          <p className="text-gray-300 font-medium text-sm line-clamp-1">{item.channel_name}</p>
          <div className="flex items-center font-medium text-sm text-gray-300">
            <p>{item.views} views</p>
            <LuDot className="text-lg" />
            <p>{item.upload_date}</p>
          </div>
        </div>
        <BsThreeDotsVertical className="text-2xl" />
      </div>
    </div>
  );
}

export default SkeletonVideo;
