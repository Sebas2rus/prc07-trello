import React from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import PlayButton from "../../icons/PlayButton";

export default function Banner() {
  return (
    <div className={`${styles.backgoundGradient} pt-16 px-4`}>
      <h2 className="text-4xl font-semibold text-slate-50 text-center mb-5 ">
        Trello brings all your tasks, teammates, and tools togeter
      </h2>
      <p className=" text-slate-50 text-2xl text-center mb-10">
        Keep everything in the same place-even if your team isn&apos;t
      </p>
      <button className=" bg-blue-500  text-white w-full py-3 rounded-md">
        Sing up - it&apos;s free!
      </button>
      <a
        className="text-slate-200 flex gap-3 mt-5 place-content-center place-items-center text-lg underline"
        href=""
      >
        Watch video
        <PlayButton />
      </a>
      <Image
        className=" mx-auto mt-5"
        src="/Assets/banner/bannerImage.png"
        width={300}
        height={300}
        alt="Picture about aplication"
      ></Image>
    </div>
  );
}
