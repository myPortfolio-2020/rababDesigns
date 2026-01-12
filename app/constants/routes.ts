export const routes = [
  {
    id: 1,
    title: "↑",
    href: "/",
  },
  // {
  //   id: 2,
  //   title: "Home",
  //   href: "/",
  // },
  {
    id: 2,
    title: "My Creations & Expressions",
    href: "/myWork",
  },
  // {
  //   id: 4,
  //   title: "Say Hello",
  //   href: "/contact",
  // },
  {
    id: 3,
    title: "Healthcare UI/UX",
    href: "/healthcare",
  },
  {
    id: 4,
    title: "My Approach",
    href: "/resume",
  },
];

export type RoutePath = (typeof routes)[keyof typeof routes];
