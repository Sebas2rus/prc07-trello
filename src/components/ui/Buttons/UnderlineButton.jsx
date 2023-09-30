import Link from "next/link";
import React from "react";

export default function UnderlineButton({ text, url }) {
  return (
    <Link className="border border-blue-500 p-4" href={url}>
      {text}
    </Link>
  );
}
