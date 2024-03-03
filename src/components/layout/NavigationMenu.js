"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import React from "react";
const navigationManuOptions = [
  {
    label: "Sketch 01",
    href: "/",
  },
  {
    label: "Sketch 02",
    href: "/sketches/02",
  },
  {
    label: "Sketch 03",
    href: "/sketches/03",
  },
  {
    label: "Sketch 04",
    href: "/sketches/04",
  },
  {
    label: "Sketch 05",
    href: "/sketches/05",
  },
  {
    label: "Sketch 06",
    href: "/sketches/06",
  },
  // {
  //   label: "Sketch 07",
  //   href: "/sketches/07",
  // },
  // {
  //   label: "Sketch 08",
  //   href: "/sketches/08",
  // },
  // {
  //   label: "Sketch 09",
  //   href: "/sketches/09",
  // },
  // {
  //   label: "Sketch 10",
  //   href: "/sketches/10",
  // },
];

export default function NavigationMenuComponent() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {navigationManuOptions.map((option) => (
            <Link href={option.href} key={option.label} passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {option.label}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
