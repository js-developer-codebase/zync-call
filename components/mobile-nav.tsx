"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SIDEBAR_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="Open sidebar"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="glass-panel border-y-0 border-l-0 border-r border-white/10"
        >
          <SheetClose asChild>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex-center glassmorphism size-10 rounded-xl">
                <Image
                  src="/icons/logo.svg"
                  alt="Zync Call"
                  width={26}
                  height={26}
                />
              </div>

              <p className="bg-gradient-to-r from-white via-sky-1 to-blue-300 bg-clip-text text-[26px] font-extrabold text-transparent">
                Zync Call
              </p>
            </Link>
          </SheetClose>

          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <section className="flex h-full flex-col gap-3 pt-12 text-white">
              {SIDEBAR_LINKS.map((item) => {
                const isActive =
                  pathname === item.route ||
                  pathname.startsWith(`${item.route}/`);

                return (
                  <SheetClose key={item.route} asChild>
                    <Link
                      href={item.route}
                      className={cn(
                        "flex w-full max-w-60 items-center gap-4 rounded-xl border border-transparent px-4 py-3.5 transition-all duration-200 hover:border-white/10 hover:bg-white/[0.08]",
                        {
                          "glass-btn-primary border-white/20": isActive,
                        }
                      )}
                    >
                      <Image
                        src={item.imgUrl}
                        alt={item.label}
                        width={20}
                        height={20}
                      />

                      <p className="font-semibold">{item.label}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </section>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};
