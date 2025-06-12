import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export default function Index() {
  return (
    <>
      <SignedIn>
        <Redirect href="/dashboard" />
      </SignedIn>

      <SignedOut>
        <Redirect href="/sign-up" />
      </SignedOut>
    </>
  );
}
