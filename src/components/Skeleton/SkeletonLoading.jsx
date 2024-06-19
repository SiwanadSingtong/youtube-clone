import React from "react";

function SkeletonLoading() {
  return (
    <div className="">
      <div className="bg-zinc-800 h-[175px] rounded-lg" />
      <div className="mt-3 flex gap-5 animate-pulse">
        <div className="bg-zinc-800 h-[36px] w-[36px] rounded-full " />
        <div className="flex flex-col gap-3">
          <div className="bg-zinc-800 h-4 w-56 rounded-sm" />
          <div className="bg-zinc-800 h-4 w-32 rounded-sm" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoading;
