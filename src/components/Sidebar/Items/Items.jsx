import React from "react";

//ICONS
import { GoHome, GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { PiUserSquare } from "react-icons/pi";
import { PiVideoBold } from "react-icons/pi";
import { BiMovie } from "react-icons/bi";
import { MdAccessTime } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { TfiDownload } from "react-icons/tfi";
import { LuDot } from "react-icons/lu";

const iconMapping = {
  GoHome,
  GoHomeFill,
  SiYoutubeshorts,
  MdSubscriptions,
  MdOutlineArrowForwardIos,
  MdOutlinePlaylistPlay,
  MdOutlineHistory,
  PiUserSquare,
  PiVideoBold,
  BiMovie,
  MdAccessTime,
  BiLike,
  TfiDownload,
};

function Items({ item, className }) {
  const IconComponent = iconMapping[item.icon];
  const SpanComponent = iconMapping[item.title_span];

  return (
    <div
      className={`${item.className} hover:bg-zinc-800 flex gap-4 px-3 py-2 rounded-lg items-center transition cursor-pointer font-normal w-full relative select-none`}
    >
      {IconComponent && <IconComponent className="text-lg" />}
      {item.logo && (
        <img src={item.logo} alt={item.title} className="rounded-full" />
      )}
      <p className={`${item.text_styles} line-clamp-1`}>{item.title}</p>
      {item.new_upload && (
        <LuDot className="text-blue-500 text-3xl absolute right-0" />
      )}
      {SpanComponent && <SpanComponent className="text-lg" />}
    </div>
  );
}

export default Items;
