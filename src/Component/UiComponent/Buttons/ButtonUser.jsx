import React, {useState} from "react";
import UserDefault from "../../../Assets/default.png";
import { BiChevronDown } from "react-icons/bi";
import {HiChevronDown} from "react-icons/hi"

export default function ButtonUser({name, item}) {
  const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
    const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);

  const handleOpenCreateDropDown = () => {
    setIsCreateMenuOpen(!isCreateMenuOpen);
    setOpen(!open);
  };
  return (
    <button className="flex w-[3rem] mx-11 gap-1" onClick={handleOpenCreateDropDown}>
      <img src={UserDefault} alt="" className="rounded-full" />
      <div className="flex place-content-around py-[7px]">
        <BiChevronDown size={25}/>
      </div>
      {open ? <ArrowUp /> : <ArrowDown />}
      <div className={`absolute top-full mt-1 right-4 z-10 rounded bg-[#FFFFFF] text-[#666666] ${open ? "group-focus:block" : "hidden"}`}>
        <ul className="rounded border text-left">
          {name.map((name) => (
            <li
              key={name?.name}
              className="border-b px-4 py-1 hover:bg-gray-100"
              onClick={() => {
                if(name?.name !== selected){
                    setSelected(name?.name);
                    setOpen(false)
                }
              }}
            >
              {name?.name}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}

const ArrowUp = () => {
  return <HiChevronDown style={{ transform: "rotate(180deg)" }} />;
};

const ArrowDown = () => {
  return <HiChevronDown />;
};
