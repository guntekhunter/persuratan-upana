import React from 'react'

export default function Card({item, type, ...props}) {
  const TEXT_COLOR = {
    success: "text-[#43936C]",
    error: "text-[#CB3A31]",
    
  };
  const textClassName = TEXT_COLOR[type];

  return (
    <div className={`${textClassName} text-[12px]`}>
      <p>{item}</p>
    </div>
  )
}
