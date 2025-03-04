import Link from "next/link";
import React from "react";

interface Params {
  username: string;
}

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl mt-60">Thank you for your donation!</h1>
      <p className="w-1/2 text-center my-10">
        {`Our team really appreciates your support :)`}
      </p>
      <Link href="/" className="underline">
        Return Home
      </Link>
    </div>
  );
}
