"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 xl:flex-nowrap xl:justify-between">
        <Logo />

        <div className="flex w-full flex-col items-center md:hidden">
          <Button
            className="rounded px-3 py-2 text-sm"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </Button>

          <ul
            id="mobile-menu"
            className={
              isMenuOpen
                ? "mt-1 flex flex-col items-center gap-1 md:hidden"
                : "hidden md:hidden"
            }
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>

        <ul className="hidden basis-full justify-center md:flex md:items-center md:gap-4 xl:basis-auto">
          <li>
            <Button onClick={() => router.push("/")}>Home</Button>
          </li>
          <li>
            <Button onClick={() => router.push("/about")}>About</Button>
          </li>
          <li>
            <Button onClick={() => router.push("/portfolio")}>Portfolio</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
