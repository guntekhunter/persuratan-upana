import React from "react";
import Logo from "../../Assets/Logo Upana.png";
import SideLink from "./sideLink";


export default function NavBar({type, ...props}) {
  return (
    <div className="bg-[#F0F6FF]">
      <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-[#FFFFFF] text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between">
          <div className="container-fluid mt-[-1rem]">
            <img className="pt-5 pl-6 w-[8rem]" src={Logo} />
          </div>
          <div className="container-fluid  px-8">
            adasd
          </div>
        </div>
      </nav>

      {/* sidebar */}
      <div className="flex bg-[#FFFFFF]">
      <div className="flex flex-col h-screen p-3 shadow w-60">
        <div className="space-y-3">
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <SideLink item="Persuratan" type="active"/>
              <SideLink item="Riwayat" type="none"/>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
