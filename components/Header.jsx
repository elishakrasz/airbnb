import Image from "next/image";
import React, { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // const handleChange = (e) => {
  //   setSearchInput(e.target.value)
  //   console.log(searchInput)
  // }

  const handleSelect = (ranges) => {
    console.log('r', ranges)
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const selectionRange = {
    startDate: startDate ,
    endDate: endDate,
    key: 'selection'
  }
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Header"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search..."
        />
        <SearchIcon className="hidden md:inline-flex mx-auto md:mx-2 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center border-2 p-2 space-x-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && <div className="flex flex-col col-span-3">
          <DateRangePicker 
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
        </div>}
      
    </header>
  );
}

export default Header;
