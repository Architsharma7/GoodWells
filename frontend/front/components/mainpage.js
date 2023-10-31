import React from "react";
import Image from "next/image";
import sf from "../public/sf.png";
import sd from "../public/sd.png";
import dao2 from "../public/dao2.png";
import gd from "../public/gd.png";
import { BiDonateHeart } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Link from "next/link";

const Mainpage = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/3 bg-yellow-500 h-screen">
        <div className="text-center flex flex-col mx-auto">
          <div className="mx-10">
            <Image
              className="mx-auto"
              src={sd}
              height={120}
              width={120}
              alt="dao"
            ></Image>
            <p className="text-white text-3xl">
              Sustainable Development Funding
            </p>
            <p className="text-white mt-1 text-sm">
              Many impactful projects aimed at renewable energy, clean water
              access, and environmental and human conservation face a chronic
              shortage of funding. GoodWells bridges this gap by enabling
              micro-donations through streaming, ensuring a consistent flow of
              support for these initiatives.
            </p>
          </div>
          <div className="mt-6 mx-10">
            <Image
              className="mx-auto"
              src={dao2}
              height={100}
              width={100}
              alt="dao"
            ></Image>
            <p className="text-white text-3xl">DAO monitoring</p>
            <p className="text-white mt-1 text-sm">
              Only the people who have staked a certain amount of $G can create
              proposals, ensuring no corruption in raising donations. The
              proposals need to be approved by the GoodWells DAO before becoming
              a campaign.{" "}
            </p>
          </div>
          <div className="mt-6 mx-10">
            <div className="flex">
              <Image
                className="mx-auto"
                src={sf}
                height={100}
                width={100}
                alt="dao"
              ></Image>
              <Image
                className="mx-auto"
                src={gd}
                height={100}
                width={100}
                alt="dao"
              ></Image>
            </div>
            <p className="text-white text-3xl">SuperFluid X Good Dollar</p>
            <p className="text-white mt-1 text-sm">
              SuperFlud streaming facilitates the user to stream money, making
              it easier for them to spend it, rather than spending at once. Good
              dollar enables transparency and traceability of every donation,
              assuring contributors that their funds are making a real impact.
            </p>
          </div>
        </div>
      </div>
      <div className="w-2/3 bg-green-800 h-screen">
        <div className="mt-32 text-start mx-20">
          <p className="text-white text-8xl font-serif font-semibold">
            Streaming Change{" "}
          </p>
          <p className="text-white text-6xl font-serif font-semibold mt-6">
            for a{" "}
          </p>
          <p className="text-white text-8xl font-serif font-semibold mt-6">
            Sustainable World.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
