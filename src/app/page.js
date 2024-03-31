import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <main className="">
      <h1>Home Page</h1>

      <Link href="/query" class="link-success">
        query
      </Link>
      <Link href="/tasks">tasks</Link>
      <Link href="/drinks">drinks</Link>
      <Link href="/prisma-example">prisma example</Link>
      <Link href="/client">client</Link>
    </main>
  );
};

export default page;
