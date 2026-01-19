"use client";

import mergeClasses from "@/utils/mergeClasses";
import { useRouter } from "next/navigation";
import { FC, Fragment, ReactNode } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import Button from "../UI/Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import useUser from "@/hooks/useUser";
import { toast } from "react-hot-toast";

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const { onOpen } = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user, isLoading } = useUser();
  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    // TODO: Reset the playing songs
    router.refresh();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged Out!");
    }
  };
  return (
    <div
      className={mergeClasses(
        "h-fit bg-gradient-to-b from-emerald-800/50 px-6 py-5",
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black/75 flex items-center justify-center hover:opacity-75 transition"
            onClick={() => router.back()}
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            className="rounded-full bg-black/75 flex items-center justify-center hover:opacity-75 transition"
            onClick={() => router.forward()}
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button className="bg-white px-6 py-2" onClick={handleLogout}>
                Log Out
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className="bg-white w-min"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <Fragment>
              <div>
                <Button
                  className="bg-transparent text-neutral-300 font-medium"
                  onClick={onOpen}
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button className="bg-white px-6 py-2" onClick={onOpen}>
                  Log In
                </Button>
              </div>
            </Fragment>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
