import { UserDetails, Subscription } from "@/types/stripe";
import { User } from "@supabase/auth-helpers-nextjs";
import {
  useSessionContext,
  useUser as useSupaUser,
} from "@supabase/auth-helpers-react";
import { createContext, useState, useEffect } from "react";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

interface Props {
  [propName: string]: any;
}

const UserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase,
  } = useSessionContext();
  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  useEffect(() => {
    const fetchUserData = async (): Promise<void> => {
      const getUserDetails = () => supabase.from("users").select("*").single();
      const getSubscription = () =>
        supabase
          .from("subscriptions")
          .select("*, prices(*), products(*)")
          .in("status", ["trialing", "active"]);

      if (user && !isLoadingData && !userDetails && !subscription) {
        setIsLoadingData(true);
        const [userDetailsPromise, subscriptionsPromise] =
          await Promise.allSettled([getUserDetails(), getSubscription()]);
        if (userDetailsPromise.status === "fulfilled") {
          setUserDetails(userDetailsPromise.value.data as UserDetails);
        }
        if (subscriptionsPromise.status === "fulfilled") {
          setSubscription(
            subscriptionsPromise.value.data as unknown as Subscription
          );
        }
      } else if (!user && !isLoadingUser && !isLoadingData) {
        setUserDetails(null);
        setSubscription(null);
      }
    };
    fetchUserData();
  }, [isLoadingData, isLoadingUser, subscription, supabase, user, userDetails]);

  const value: UserContextType = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    subscription,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export { UserContext, UserContextProvider };
export type { Props };
