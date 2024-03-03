import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 mt-12  text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Thareq Muhammad Azani All rights reserved.
      </small>
      <Link
        href={"/sitemap.xml"}
        className="mb-2 p-0 hover:underline hover:text-blue-400 block text-xs"
      >
        Sitemap
      </Link>
    </footer>
  );
}
