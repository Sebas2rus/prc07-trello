"use client";
import React from "react";
import Logo from "../icons/Logo";
import MenuIcon from "../icons/menu";
import { useState } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import CloseIcon from "../icons/Close";
import ArrowDown from "../icons/ArrowDown";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <section className="h-16 text-lg ">
      {/* desktop version */}
      <div className="hidden lg:flex h-16 ">
        <ul className="h-16 w-full  flex gap-6 place-items-center mx-4 ">
          <li className="cursor-pointer">
            <Logo />
          </li>
          <li className="flex place-items-center gap-2 hover:text-blue-500 cursor-pointer">
            Funciones <ArrowDown />
          </li>
          <li className="flex place-items-center gap-2 hover:text-blue-500 cursor-pointer">
            Soluciones <ArrowDown />
          </li>
          <li className="flex place-items-center gap-2 hover:text-blue-500 cursor-pointer">
            Planes
            <ArrowDown />
          </li>
          <li className="cursor-pointer">Precios </li>
          <li className="flex place-items-center gap-2 hover:text-blue-500 cursor-pointer">
            Recursos <ArrowDown />
          </li>
        </ul>
        <ul className="w-7/12 h-16  flex gap-3 place-content-end  ">
          <li className="flex place-items-center cursor-pointer">
            Iniciar Sesión
          </li>
          <li className="bg-blue-500 px-4 text-white hover:bg-blue-700 cursor-pointer flex place-items-center">
            Obtenter Trello gratis
          </li>
        </ul>
      </div>

      {/* Mobile version*/}
      <div className="w-full h-16 mt-4">
        <ul className="px-4 lg:hidden flex place-items-center place-content-between w-full">
          <li
            className="cursor-pointer list-none"
            onClick={() => setOpenMenu(false)}
          >
            <Logo />
          </li>
          <li
            className="list-none cursor-pointer"
            onClick={() => (openMenu ? setOpenMenu(false) : setOpenMenu(true))}
          >
            {openMenu ? <CloseIcon /> : <MenuIcon />}
          </li>
        </ul>
        {openMenu && (
          <div className="relative lg:hidden">
            <ul className="absolute w-full p-4">
              <li className="flex cursor-pointer  border-t place-content-between py-4 place-items-center">
                <p>Funciones</p> <ArrowLeft />
              </li>
              <li className="flex cursor-pointer  border-t place-content-between py-4 place-items-center">
                <p>Soluciones</p> <ArrowLeft />
              </li>
              <li className="flex cursor-pointer border-t place-content-between py-4 place-items-center">
                <p>Planes</p> <ArrowLeft />
              </li>
              <li className="flex cursor-pointer border-t place-content-between py-4 place-items-center">
                <p>Precios</p>
              </li>
              <li className="flex cursor-pointer border-y mb-4 place-content-between py-4 place-items-center">
                <p>Recursos</p> <ArrowLeft />
              </li>
              <li className=" bg-blue-500 cursor-pointer text-white flex border-t place-content-center py-4 place-items-center">
                <p className="text-center">Ir a tus tableros</p>
              </li>
              <li className=" border-blue-500 cursor-pointer border mt-4 flex hover:text-blue-500  place-content-center py-4 place-items-center">
                <p className="text-center">Iniciar sesión</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
