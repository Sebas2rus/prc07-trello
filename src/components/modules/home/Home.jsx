import Banner from "@/ui/Banner/Banner";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="mx-auto px-4 relative ">
        <section className="max-w-sm md:ml-4 mb-8">
          <h3 className="font-semibold text-base">TRELLO 101</h3>
          <h2 className="font-semibold sm:text-4xl ">
            A prodFuctivity powerhouse
          </h2>
          <p className="mt-4">
            Simple, flexible, and powerful. All it takes are boards, lists, and
            cards to get a clear view of who’s doing what and what needs to get
            done. Learn more in our{" "}
            <a className="underline text-blue-500 cursor-pointer">
              guide for getting started
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
