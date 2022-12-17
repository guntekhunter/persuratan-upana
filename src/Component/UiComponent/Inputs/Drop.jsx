import React, { useState } from "react";
import TextColor from "../Text/TextColor";
import Action from "../Buttons/Action";
import { HiChevronDown } from "react-icons/hi";

export default function Drop({onChange, callback, name, drop, className, item, ...props }) {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);

  const handleOpenCreateDropDown = () => {
    setIsCreateMenuOpen(!isCreateMenuOpen);
    setOpen(!open);
  };
  return (
    <button
    onChange={onChange}
    name={name}
      onClick={handleOpenCreateDropDown}
      className={`group relative flex ${className} w-full h-fit rounded-[6px] h-[2rem] border-[1.5px] text-[.8rem] px-1.5 py-1 relative`}
    >
      <TextColor item={selected ? selected : item} color="lightDark"/>
      {open ? <ArrowUp /> : <ArrowDown />}
      <div
        className={`absolute top-full mt-1 z-10 right-[.01rem] w-max min-w-full rounded bg-[#FFFFFF] text-[#FE9A00] ${
          open ? "group-focus:block" : "hidden"
        }`}
      >
        <ul className="rounded border-[1.5px] text-left">
          {drop?.map((name)=> (
            <li
            key={name?.name}
            className="border-b px-4 py-1 hover:bg-gray-100 " onClick={() => {
              if(name?.name !== selected){
                  setSelected(name?.name);
                  setOpen(false)
                  callback(name?.name)

              }
            }}
            >
              <TextColor item={name?.name} color="secondary"/>
            </li>
          ))}
          <li className="border-b px-4 py-1 hover:bg-gray-100 text-[#3267E3]"><Action item="Tambah persuratan..."/></li>
        </ul>
      </div>
    </button>
  );
}

const ArrowUp = () => {
  return <HiChevronDown style={{ transform: "rotate(180deg)" }} className='absolute right-0 mr-2 mt-1 text-[]'/>;
};

const ArrowDown = () => {
  return <HiChevronDown className='absolute right-0 mr-2 mt-1 text-[]'/>;
};

// import React from 'react';
// import TextColor from '../Text/TextColor';
// import {MdKeyboardArrowDown} from "react-icons/md";

// export default function Drop({className, item, ...props}) {
//   return (
//     <div className={`${className} w-full h-fit rounded-[6px] h-[2rem] border-[1.5px] text-[.8rem] px-1.5 py-1 relative`}>
//       <div className='flex flex-row item-center right-0'>
//       <MdKeyboardArrowDown className='absolute right-0 mr-2 mt-1 text-[]'/>
//       </div>
//        <TextColor item={item} className="inline-block align-text-left"/>
//     </div>
//   )
// }
