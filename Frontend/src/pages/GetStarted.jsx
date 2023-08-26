import React from "react";
import { SignOutButton, useAuth } from "@clerk/clerk-react";

export default function GetStarted() {
  const { isSignedIn } = useAuth();
  
  return (
    <div>
      {isSignedIn && (
        <SignOutButton />
      )}
    </div>
  );
}
