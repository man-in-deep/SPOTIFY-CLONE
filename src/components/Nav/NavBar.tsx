"use client";

import { FC, ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "../UI/Box";
import NavbarItem from "./NavbarItem";
import Library from "../Library/Library";

interface SiteBar {
  children: ReactNode;
}

const Navbar: FC<SiteBar> = ({ children }) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathName !== "/search",
        href: "/",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathName === "/search",
        href: "/search",
        icon: BiSearch,
      },
    ],
    [pathName]
  );

  return (
    <div className="flex h-full px-2 md:pl-0">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[425px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item, index) => (
              <NavbarItem key={index} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Navbar;
