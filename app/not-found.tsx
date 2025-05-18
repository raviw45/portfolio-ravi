"use client";

import Button from "@/components/common/button";
import Link from "next/link";
// import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  // Optional: Redirect after a delay
  // useEffect(() => {
  //   const timeout = setTimeout(() => router.push("/"), 5000);
  //   return () => clearTimeout(timeout);
  // }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        It might have been moved or deleted.
      </p>
      <div className="mt-6 flex gap-4">
        <Button onClick={() => router.back()} variant="outline">
          Go Back
        </Button>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
