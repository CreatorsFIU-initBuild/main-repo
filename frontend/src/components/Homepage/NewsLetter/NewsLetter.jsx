import React from "react";

import laughing from "../../../assets/laughing.jpg";
import working from "../../../assets/working.jpg";
import students from "../../../assets/fiustudents.jpg";

export default function NewsLetter() {
  return (
    <div className="flex justify-center items-center min-h-screen !p-4">
      {/* Left Column */}
      <div className="w-1/4 !m-3 flex flex-col h-[744px]">
        <div className="h-1/2  !m-2 bg-[#446ABE] relative overflow-hidden rounded-lg">
          <div className="absolute top-0 right-0 !m-3 flex flex-col text-right text-[#DEA921] text-xl font-bold">
            <p>Design made simple</p>
            <p>Effortless & clean</p>
          </div>
          <img
            src="https://cdn.discordapp.com/attachments/1354207170933162034/1357894260740849844/Screenshot_2025-04-04_214649.png?ex=67f1dd14&is=67f08b94&hm=ffc426e514c9f29678cd1aa0402a5c4110507f3fa6fcc2078acdcf474092c580&"
            alt="Design Placeholder"
            className="absolute bottom-0 left-0 !m-3 w-55 h-55 object-cover rounded-full z-0" // Increased size and rounded full
          />
        </div>
        <div className="h-1/2  !m-2 bg-[#DEA921] relative overflow-hidden rounded-lg">
          <div className="absolute bottom-0 left-0 !m-3 flex flex-col text-[#446ABE] text-xl font-bold">
            <p>Showcase your </p>
            <p> Creativity make ideas shine</p>
          </div>
          <img
            src={working}
            alt="Creativity Placeholder"
            className="absolute top-0 right-0 !m-3 w-55 h-55 object-cover rounded-full z-0" // Increased size and rounded full
          />
        </div>
      </div>

      {/* Center Section */}
      <div className="h-[744px] sm:w-[500px] sm:h-[520px] w-1/3 md:w-[600px] md:h-[650px] flex justify-center items-center">
        <div className="relative w-[673px] h-[690px] sm:w-[450px] sm:h-[470px] md:w-[550px] md:h-[600px] flex justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://cdn.discordapp.com/attachments/1354207170933162034/1357893941411840110/9129766188_12e686b1c8.jpg?ex=67f1dcc8&is=67f08b48&hm=2abfea4ee576dbc19f797b3e3abc260bde44d387af7207eb076eca80c93d38ad&')] rounded bg-cover bg-center filter blur-lg"></div>

          <div className="w-[548px] h-[517px] sm:w-[350px] sm:h-[370px] md:w-[450px] md:h-[500px] shadow-xl rounded text-center !p-4 bg-white bg-opacity-90 z-1">
            <h1 className="text-3xl font-bold">Join Us</h1>
            <p className="!mt-2">
              Stay up to date on the latest and greatest, get special newsletter
              members discounts, and lots of inspiration.
            </p>
            <input
              className="border-2 border-gray-400 w-full h-12 !mt-4 !p-2 rounded-lg text-center"
              placeholder="Enter your email here"
            />
            <button className="!p-3 bg-black rounded !m-5 text-white cursor-pointer font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/4 !m-3 black flex flex-col h-[744px]">
        <div className="h-1/2 !m-2 bg-[#DEA921] relative overflow-hidden rounded-lg">
          <div className="absolute top-0 left-0 !m-3 flex flex-col text-[#446ABE] text-xl font-bold">
            <p>Don't miss out</p>
            <p>Get exclusive drops</p>
          </div>
          <img
            src={laughing}
            alt="Exclusive Placeholder"
            className="absolute bottom-0 right-0 !m-3 w-55 h-55 object-cover rounded-full" // Increased size and rounded full
          />
        </div>
        <div className="h-1/2 !m-2 bg-[#446ABE] relative overflow-hidden rounded-lg">
          <div className="absolute bottom-0 right-0 !m-3 flex flex-col text-right text-[#DEA921] text-xl font-bold">
            <p>Deals by Panthers</p>
            <p>For Panthers</p>
          </div>
          <img
            src={students}
            alt="Panther Placeholder"
            className="absolute top-0 left-0 !m-3 w-55 h-55 object-cover rounded-full z-0" // Increased size and rounded full
          />
        </div>
      </div>
    </div>
  );
}
