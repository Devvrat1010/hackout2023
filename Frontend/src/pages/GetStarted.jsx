import React from "react";
import { SignOutButton, useAuth } from "@clerk/clerk-react";


export default function GetStarted(){
  const { isSignedIn } = useAuth();
  return(
    <div>
      {isSignedIn && (
      <SignOutButton className="cursor-pointer font-mono rounded-lg px-2 text-center py-2 border border-solid border-white border-1 hover:bg-white hover:text-black transition-all" />
      )}
    </div>
  )
}

