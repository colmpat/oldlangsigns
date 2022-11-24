import { type NextPage } from "next";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";


const Admin: NextPage = () => {
  const { data: sessionData } = useSession();

  /**
    * trigger sign in on page load
    */
  useEffect(() => {
    if (!sessionData) {
      signIn();
    }
  }, [sessionData])

  return (
    <>
      <div>
        <h1>Admin Panel</h1>
        <h2>{sessionData ? "logged" : "not logged"} in</h2>
      </div>
    </>
  )
}

export default Admin;
