import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import logo from "/logo.png";
import { IoMdMic } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import profile from "/profile.jpg";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { setIsSidebar, isSidebar, mobileShow, setMobileShow } = useUtils();
  const [searchBar, setSearchBar] = useState(false);

  useEffect(() => {
    console.log({ setIsSidebar, mobileShow });
  }, [isSidebar]);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };
  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    }
    setIsSidebar(!isSidebar);
  };
  if (searchBar) {
    return (
      <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 items-center">
        <IoArrowBack size={20} onClick={()=>setSearchBar(!searchBar)}/>
        <div className="flex flex-grow items-center mx-4">
          <div className="w-[100%] px-3 py-2 border border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-400 rounded-r-full bg-gray-100"
            onClick={searchQueryHandler}
          >
            <CiSearch size={"24px"} />
          </button>
        </div>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
    );
  }

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu
          className="text-xl cursor-pointer"
          onClick={handleSidebar}
        />
        <img src={logo} alt="yt-logo" className="w-20 cursor-pointer" />
      </div>
      <div className="hidden md:flex w-[35%] items-center">
        <div className="w-[100%] px-3 py-2 border border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border border-gray-400 rounded-r-full bg-gray-100"
          onClick={searchQueryHandler}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex space-x-5 items-center cursor-pointer">
        <IoSearch
          className="text-2xl md:hidden"
          onClick={() => setSearchBar(!searchBar)}
        />
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl cursor-pointer" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
}

export default Navbar;
