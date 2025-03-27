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
  const BlogLink: React.FC<{ href: string; query: string }> = ({
    href,
    query,
  }) => {
    return <Link href={`/${href}?${query.toLowerCase()}`}>{query}</Link>;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <BlogLink href="blogs" query="Latest" />
            </NavigationMenuLink>
            <NavigationMenuLink>
              <BlogLink href="blogs" query="Popular" />
            </NavigationMenuLink>
            <NavigationMenuLink>
              <BlogLink href="blogs" query="Highligh" />
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Questions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <BlogLink href="questions" query="Latest" />
            </NavigationMenuLink>
            <NavigationMenuLink>
              <BlogLink href="questions" query="Popular" />
            </NavigationMenuLink>
            <NavigationMenuLink>
              <BlogLink href="questions" query="Highligh" />
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="font-bold" asChild>
            <Link href="/go">Project</Link>
          </NavigationMenuLink>
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
