import React from 'react'

export default function Button({ children, className, onClik, type, ...props }) {
    const BUTTON_TYPE = {
        primary: "bg-[#1975FF] hover:bg-[#1561D5] text-[#FFFFFF] border-[#BBCCF6]",
        info: "bg-[#3267E3] hover:bg-[#2A56BD] text-[#FFFFFF] border-[#BBCCF6]",
        success: "bg-[#43936C] hover:bg-[#387B5A] text-[#FFFFFF] border-[#C0DBCE]",
        warning: "bg-[#CD7B2E] hover:bg-[#AB6626] text-[#FFFFFF] border-[#EED3B9]",
        danger: "bg-[#CB3A31] hover:bg-[#A93029] text-[#FFFFFF] border-[#EEBDBA]",

      };
    const buttonClassName = BUTTON_TYPE[type];
  // console.log(buttonClassName)
  return (
    <div>
      <button className={`${buttonClassName} rounded-[6px] border-1 font-normal w-full h-[2rem]`} onClick={onClik}>{children}</button>
    </div>
  )
}
