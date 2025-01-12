"use client";

import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <img src="https://digiflyeg.com/wp-content/uploads/2023/10/cropped-digifly-1.jpg" className="hidden md:block w-20 h-20" alt="" />
      <ul className="md:ms-[10%] flex grow space-x-5 md:space-x-20 text-black">
        <li>
            <Link href="" className="hover:text-green-600 text-green-600">Home</Link> 
        </li>
        <li>
          <Link href="" className="hover:text-green-600">
            Categories
          </Link>
        </li>
        <li>
            <Link href="" className="hover:text-green-600">Contact us</Link> 
        </li>
        <li>
            <Link href="/texteditor" className="hover:text-green-600">About</Link> 
        </li>
      </ul>
      <button className="flex items-center gap-1"><img src="https://imgs.search.brave.com/YOnmwwIQ5SZiydHYkuIcSoRL1VTTdv2vuel7FBU08R4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2E1L0Zs/YWdfb2ZfdGhlX1Vu/aXRlZF9LaW5nZG9t/XyUyODEtMiUyOS5z/dmcvNTEycHgtRmxh/Z19vZl90aGVfVW5p/dGVkX0tpbmdkb21f/JTI4MS0yJTI5LnN2/Zy5wbmc" 
      className="w-5 h-5 rounded rounded-full" alt="" /> EN</button>
    </nav>
  );
};

export default Navbar;
