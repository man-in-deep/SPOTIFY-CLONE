import { UserContext } from "@/context/user";
import { useContext } from "react";

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
};

export default useUser;
