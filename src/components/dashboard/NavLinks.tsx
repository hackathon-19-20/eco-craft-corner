"use client";
import { FaPaintBrush, FaHome, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/dashboard", icon: FaHome },
  { name: "My Cart", href: "/dashboard/my-cart", icon: FaShoppingCart },
  { name: "My Products", href: "/dashboard/my-products", icon: FaPaintBrush },
];

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-primary text-primary-foreground": pathName === link.href,
                " hover:bg-primary-hover": pathName !== link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
