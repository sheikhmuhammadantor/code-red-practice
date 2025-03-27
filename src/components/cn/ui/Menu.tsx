"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/cn/utils/navigation-menu";
import Link from "next/link";

function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Latest</NavigationMenuLink>
            <NavigationMenuLink>Popular</NavigationMenuLink>
            <NavigationMenuLink>Highline</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Question</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Latest</NavigationMenuLink>
            <NavigationMenuLink>Popular</NavigationMenuLink>
            <NavigationMenuLink>Highline</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Project</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Popular</NavigationMenuLink>
            <NavigationMenuLink>Highline</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="font-bold" asChild>
            <Link href="/go">Ask AI</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Menu;
