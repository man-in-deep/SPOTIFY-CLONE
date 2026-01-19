"use client";

import { UserContextProvider } from "@/context/user";
import { FC, ReactNode } from "react";

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default UserProvider;
