import React from "react";
import Items from "./Items/Items";

//MAIN

const mainmenu = [
  {
    title: "Home",
    icon: "GoHomeFill",
    className: "bg-gray-500",
    text_styles: "font-semibold",
  },
  {
    title: "Shorts",
    icon: "SiYoutubeshorts",
  },
  {
    title: "Subcriptions",
    icon: "MdSubscriptions",
  },
];

const youmenu = [
  {
    title: "You",
    title_span: "MdOutlineArrowForwardIos",
    text_styles: "font-semibold",
  },
  {
    title: "Your channel",
    icon: "PiUserSquare",
  },
  {
    title: "History",
    icon: "MdOutlineHistory",
  },
  {
    title: "Playlists",
    icon: "MdOutlinePlaylistPlay",
  },
  {
    title: "Your videos",
    icon: "PiVideoBold",
  },
  {
    title: "Your movies",
    icon: "BiMovie",
  },
  {
    title: "Watch later",
    icon: "MdAccessTime",
  },
  {
    title: "Liked videos",
    icon: "BiLike",
  },
  {
    title: "Downloads",
    icon: "TfiDownload",
  },
];

const subs = [
  {
    title: "Subscriptions",
    text_styles: "font-semibold",
  },
  {
    title: "Samurai Diamond",
    logo: "https://placehold.co/24x24",
  },
  {
    title: "Paiky",
    logo: "https://placehold.co/24x24",
  },
  {
    title: "9eyes",
    logo: "https://placehold.co/24x24",
  },
  {
    title: "Pancake Sims",
    logo: "https://placehold.co/24x24",
  },
  {
    title: "GamingOz",
    logo: "https://placehold.co/24x24",
  },
  {
    title: "Durian'sTime",
    logo: "https://placehold.co/24x24",
  },
  {
    title: "Sciroads",
    logo: "https://placehold.co/24x24",
  },
  {
    title: "three dollars thirty",
    logo: "https://placehold.co/24x24",
  },
  {
    title: "Popstar Games",
    logo: "https://placehold.co/24x24",
  },
  {
    title: "G-BOB",
    logo: "https://placehold.co/24x24",
  },
  {
    title: "Horseoi DotA3",
    logo: "https://placehold.co/24x24",
  },
  {
    title: "Gamer Outside",
    logo: "https://placehold.co/24x24",
  },
];

function Sidebar() {
  return (
    <>
      <div className="bg-black text-white min-h-full h-full overflow-auto">
        <div className="p-3 flex flex-col gap-3 max-w-[216px]">
          <div className="flex flex-col">
            {mainmenu.map((item) => (
              <Items key={item.title} item={item} className={item.className} />
            ))}
          </div>
          <hr className="bg-gray-500 border-0 h-px" />
          <div className="flex flex-col">
            {youmenu.map((item) => (
              <Items key={item.title} item={item} />
            ))}
          </div>
          <hr className="bg-gray-500 border-0 h-px" />
          <div className="flex flex-col">
            {subs.map((item) => (
              <Items key={item.title} item={item} />
            ))}
          </div>
          <hr className="bg-gray-500 border-0 h-px" />
          <div className="flex flex-col gap-4 mb-3">
            <p className="text-sm font-semibold">Diamond project Youtube clone for practice</p>
            <span className="text-xs">© 2024 Diamond</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
