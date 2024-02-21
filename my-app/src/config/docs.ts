import { MainNavItem, SidebarNavItem } from "types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "Shroom of the day",
      href: "/shroom-of-the-day",
    },
    {
      title: "Connect",
      href: "https://github.com/hypoalien/",
    },
    {
      title: "Join",
      href: "https://github.com/hypoalien/",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/anisettyanudeep",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Follow Us",
      items: [
        {
          title: "Introduction",
          href: "/",
          items: [],
        },
      ],
    },
  ],
};
