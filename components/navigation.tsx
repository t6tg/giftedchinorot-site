import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {}

export default function Navigation({}: Props): ReactElement {
  return (
    <div className="flex justify-center text-sm p-2">
      <div className="mx-1 p-1 px-2 md:p-2 xl:p-2 xl:text-lg bg-blue-500 text-white rounded-lg">
        <Link href="/">
          <a>HOME</a>
        </Link>
      </div>
      <div className="mx-1 p-1 px-2 md:p-2 xl:p-2 xl:text-lg bg-blue-500 text-white rounded-lg">
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
      </div>
      <div className="mx-1 p-1 px-2 md:p-2 xl:p-2 xl:text-lg bg-blue-500 text-white rounded-lg">
        <Link href="/oc">
          <a>COURSES</a>
        </Link>
      </div>
      <div className="mx-1 p-1 px-2 md:p-2 xl:p-2 xl:text-lg bg-blue-500 text-white rounded-lg">
        <Link href="/oc">
          <a>GALLERY</a>
        </Link>
      </div>
      <div className="mx-1 p-1 px-2 md:p-2 xl:p-2 xl:text-lg bg-blue-500 text-white rounded-lg">
        <Link href="/oc">
          <a>CONTACT</a>
        </Link>
      </div>
    </div>
  );
}
