import Link from "next/link";
import React from "react";


export default function Page() {
  return <div className="flex items-center justify-center flex-col">
  <h1 className="text-6xl mt-60">Your donation has been cancelled</h1>
  <Link href="/" className="underline mt-10">
    Return Home
  </Link>
</div>;
}
