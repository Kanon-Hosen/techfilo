"use client";

import Loading from "@/components/Loading";
import { auth } from "@/Firebase.config";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return router.push('/');
  }
  return <>{children}</>;
}

export default PrivateRoute;
