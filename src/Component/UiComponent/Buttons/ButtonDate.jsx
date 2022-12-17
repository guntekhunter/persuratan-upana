import React from "react";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { MdKeyboardArrowDown } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { data } from "autoprefixer";

export default function ButtonDate({name, onChange}) {
  // console.log(onChangeDate);
  const [selectedDate, setSelectedDate] = useState(null);
  const selectedData = (date) => {
    setSelectedDate(date);
    onChange(date, name);
  };
  
  // console.log(selectedDate);
  return (
    <div>
      <DatePicker
        onChange={selectedData}
        name={name}
        selected={selectedDate}
        formatDate="dd/MM/yyyy"
        className="w-full h-fit rounded-[6px] h-[2rem] border-[1.5px] text-[.8rem] px-1.5 py-1 focus:outline-none focus:border-[#1975FF] focus:ring-sky-[#BBCCF6] focus:ring-2 focus:border-[.9px] px-3"
      />
      <div className="">
        <MdKeyboardArrowDown className="absolute right-[.4rem] top-[2rem]" />
      </div>
    </div>
  );
}
