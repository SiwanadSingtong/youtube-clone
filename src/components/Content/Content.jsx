import React from "react";
import SkeletonVideo from "../Skeleton/SkeletonVideo";
import SkeletonShort from "../Skeleton/SkeletonShort";
import SkeletonLoading from "../Skeleton/SkeletonLoading";

//ICONS
import { SiYoutubeshorts } from "react-icons/si";

//DATA
import { videos } from "../../services/videos";
import { tags } from "../../services/tags";
import { shorts } from "../../services/shorts";
import { breaking } from "../../services/breaking";

function Content() {
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {breaking.map((video) => (
              <SkeletonVideo key={video.title} item={video} />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {videos.map((video) => (
              <SkeletonLoading />
            ))}
          </div>
          <div className="flex justify-center">
            <svg
              aria-hidden="true"
              class="w-9 h-9 text-transparent animate-spin fill-zinc-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Tag({ item }) {
  return (
    <p
      className={`py-1 px-3 rounded-lg cursor-pointer hover:bg-zinc-700 whitespace-nowrap transition select-none ${
        item.class ? item.class : "bg-zinc-800"
      }`}
    >
      {item.title}
    </p>
  );
}

export default Content;
