import React from 'react'

export default function TextColor({color ,item, className, ...props}) {
    const TEXT_COLOR = {
        primary: "text-[#333333] font-bold",
        secondary: "text-[#B2B2B2]",
        
      };
    const textClassName = TEXT_COLOR[color];
  return (
    <p className={`${textClassName} ${className} text-[12px] tracking-tight`}>{item}</p>
  )
}
