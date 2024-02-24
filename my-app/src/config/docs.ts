import { MainNavItem, SidebarNavItem } from "@/types/nav";

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
      title: "Shroom of the week",
      href: "/shroom-of-the-week",
    },
    // {
    //   title: "Sun Devil Sync",
    //   href: "https://asu.campuslabs.com/engage/organization/shroomsociety",
    // },
    // {
    //   title: "Discord",
    //   href: "https://discord.gg/3bNqaZeF66",
    //   external: true,
    // },
    // {
    //   title: "Twitter",
    //   href: "https://twitter.com/anisettyanudeep",
    //   external: true,
    // },
  ],
  sidebarNav: [
    {
      title: "Follow Us",
      items: [
        {
          title: "Instagram",
          href: "/",
          items: [],
        },
        {
          title: "Sun Devil Sync",
          href: "https://asu.campuslabs.com/engage/organization/shroomsociety",
          items: [],
        },
        {
          title: "Discord",
          href: "https://discord.gg/3bNqaZeF66",
          items: [],
        },
      ],
    },
  ],
};
