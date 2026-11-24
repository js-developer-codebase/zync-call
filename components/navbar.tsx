import { Show, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "./mobile-nav";

export const Navbar = () => {
  return (
    <nav className="flex-between glass-surface fixed left-0 top-0 z-50 w-full border-x-0 border-t-0 px-6 py-3.5 lg:px-10">
      <Link
        href="/"
        className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
      >
        <div className="flex-center glassmorphism size-10 rounded-xl transition-transform duration-200 group-hover:scale-105">
          <Image
            src="/icons/logo.svg"
            alt="Zync Call"
            width={26}
            height={26}
          />
        </div>

        <p className="bg-gradient-to-r from-white via-sky-1 to-blue-300 bg-clip-text text-[26px] font-extrabold tracking-tight text-transparent max-sm:hidden">
          Zync Call
        </p>
      </Link>

      <div className="flex-between gap-4">
        <Show when="signed-in">
          <div className="glassmorphism flex-center rounded-full p-1">
            <UserButton />
          </div>
        </Show>
        <MobileNav />
      </div>
    </nav>
  );
};
