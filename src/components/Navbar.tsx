import React from "react";
import Link from "next/link";
import {Bars3Icon} from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="border-b-2">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div>
          <Link href={"/"}>
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold uppercase tracking-tight text-[#ec1d25]">
                Wizarding World
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <button className="h-10 rounded-md border border-gray-400 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-[#e7e7e7] active:border-primary-200 active:bg-primary-200">
            Sign in
          </button>
          <button className="h-10 rounded-md bg-[#ec1d25] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#af2b30] active:bg-primary-700">
            Sign up
          </button>
        </div>
        <div className="flex items-center md:hidden">
          <button><Bars3Icon className="size-8" /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
