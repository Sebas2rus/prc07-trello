import React from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import PlayButton from "../../icons/PlayButton";

export default function Banner() {
  return (
    <div
      className={`${styles.backgoundGradient} lg:flex lg:place-items-center lg:m-auto   `}
    >
      <div className="pt-16 px-4 lg:px-12 lg:flex  lg:place-items-center lg:max-w-screen-xl lg:mx-auto">
        <div className="sm:max-w-screen-sm mx-auto ">
          <h2 className="text-4xl font-semibold text-slate-50 text-center mb-8 ">
            Trello brings all your tasks, teammates, and tools togeter
          </h2>
          <p className=" text-slate-50 text-2xl text-center mb-10">
            Keep everything in the same place-even if your team isn&apos;t
          </p>
          <form action="" className="flex gap-4 lg:flex-col xl:flex-row ">
            <input
              className="hidden md:block rounded-md w-full px-5 lg:py-3"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
            />
            <button className=" bg-blue-500 text-white w-full py-3 rounded-md">
              Sing up - it&apos;s free!
            </button>
          </form>
          <a
            className="text-slate-200 flex gap-3 mt-8 place-content-center place-items-center text-lg underline"
            href=""
          >
            Watch video
            <PlayButton />
          </a>
        </div>
        <Image
          className=" mx-auto mt-8 md:w-9/12   "
          src="/Assets/banner/bannerImage.png"
          width={2000}
          height={2000}
          alt="Picture about aplication"
        ></Image>
      </div>
    </div>
  );
}
