import React from "react";
import Link from "next/link";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/prisma-example", label: "prisma-example" },
  { href: "/tasks", label: "tasks" },
];

const Navbar = () => {
  return (
    <nav className="navbar flex-col px-8 max-auto  sm:flex-row">
      <Link className="btn btn-primary" href="/">
        Home
      </Link>
      <ul className="menu menu-horizontal md:ml-8">
        {links.map((item) => {
          return (
            <Link
              key={item.href}
              className="btn mx-4 capitalize"
              href={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
