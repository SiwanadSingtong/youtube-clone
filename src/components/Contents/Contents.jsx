import React, { Component } from "react";
import SkeletonVideo from "../Skeleton/SkeletonVideo";
import SkeletonShort from "../Skeleton/SkeletonShort";

//ICONS
import { SiYoutubeshorts } from "react-icons/si";

//DATA
import { videos } from "../../services/videos";
import { tags } from "../../services/tags";
import { shorts } from "../../services/shorts";

function Contents() {
  return (
    <section className="bg-black h-full min-h-screen text-white overflow-y-auto">
      <div className="py-2 px-5 flex gap-3 text-sm font-medium fixed bg-black w-full overflow-x-auto">
        {tags.map((tag) => (
          <Tag key={tag.title} item={tag} />
        ))}
      </div>
      <div className="px-5">
        <div className="py-16 flex flex-col gap-3">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {videos.map((video) => (
              <SkeletonVideo key={video.title} item={video} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <SiYoutubeshorts className="text-2xl text-red-600" />
            <h5 className="text-2xl font-semibold">Shorts</h5>
          </div>
          <div className="grid grid-cols-7 gap-3">
            {shorts.map((short) => (
              <SkeletonShort key={short.title} item={short} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <h5 className="text-2xl font-semibold">Breaking news</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Tag({ item }) {
  return (
    <p
      className={`py-1 px-3 rounded-lg cursor-pointer hover:bg-gray-600 whitespace-nowrap ${
        item.class ? item.class : "bg-gray-800"
      }`}
    >
      {item.title}
    </p>
  );
}

export default Contents;
