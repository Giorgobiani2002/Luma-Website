import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-center flex-col">
      <nav className="flex justify-between items-center">
        <Image src="/luma.png" width={70} height={64} alt="LogoLuma"></Image>
        <h2>ხშირად დასმული კითხვები</h2>
        {/* <Image src="file.svg" width={40} height={64} alt="LogoLuma"></Image> */}
        <h2>GEO</h2>
      </nav>
      <h1 className="text-[32px] font-bold text-center mt-[24px]">
        დონორის სარეგისტრაციო ანკეტა
      </h1>
      <div className="text-center border-[1px] rounded-4xl pl-8 pr-8 pt-2 pb-2 text-[15px] mt-[24px] m-auto bg-gray-200 font-bold">
        თქვენი მონაცემები დარჩება კონფიდენციალური
      </div>
      <div className="w-full bg-black h-[1px] mt-[24px]"></div>
    </div>
  );
}
