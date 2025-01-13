"use client";
import i18next from "i18next";
import Link from "next/link";
import { FC } from "react";
import "./nav.css";
interface NavbarProps {
  language: string;
  changeLang: () => void;
}

const Navbar: FC<NavbarProps> = ({ language, changeLang }) => {
  return (
    <nav
      className={`flex items-center justify-between p-4 ${i18next.language === "en" ? "enRow" : "arRev"} w-full`}
      dir={language === "en" ? "ltr" : "rtl"} 
    >
      <a href="">
        <img
          src={"https://digiflyeg.com/wp-content/uploads/2023/10/cropped-digifly-1.jpg"}
          className="hidden md:block w-20 h-20"
          alt="Logo"
        />
      </a>
      <ul className={`flex md:w-[50%] justify-between gap-5 text-black ${i18next.language === "en" ? "enRow" : "arRev"} `}>
        <li>
          <Link href="" className="hover:text-green-600 text-green-600">
            {i18next.t("home")}
          </Link>
        </li>
        <li>
          <Link href="" className="hover:text-green-600">
            {i18next.t("categories")}
          </Link>
        </li>
        <li>
          <Link href="" className="hover:text-green-600">
            {i18next.t("contactus")}
          </Link>
        </li>
        <li>
          <Link href="/texteditor" className="hover:text-green-600">
            {i18next.t("about")}
          </Link>
        </li>
      </ul>
      <button onClick={changeLang} className={`flex items-center gap-1 ${i18next.language === "en" ? "enRow" : "arRev"}`}>
        <img
          src={
            language === "en"
              ? "https://imgs.search.brave.com/YOnmwwIQ5SZiydHYkuIcSoRL1VTTdv2vuel7FBU08R4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2E1L0Zs/YWdfb2ZfdGhlX1Vu/aXRlZF9LaW5nZG9t/XyUyODEtMiUyOS5z/dmcvNTEycHgtRmxh/Z19vZl90aGVfVW5p/dGVkX0tpbmdkb21f/JTI4MS0yJTI5LnN2/Zy5wbmc"
              : "https://imgs.search.brave.com/rNZqdWTuMRZOrjit-nLc8y2V2ds_4Vg8zQVmvyBoy70/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbW9q/aWdyYXBoLm9yZy9t/ZWRpYS9qb3lwaXhl/bHMvZmxhZy1lZ3lw/dF8xZjFlYS0xZjFl/Yy5wbmc"
          }
          className="w-5 h-5 rounded-full"
          alt="Language Icon"
        />
        {language === "ar" ? "AR" : "EN"}
      </button>
    </nav>
  );
};

export default Navbar;
