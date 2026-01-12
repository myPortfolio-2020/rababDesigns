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
    title: "Work",
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
    href: "/myApproach",
  },
  {
    id: 5,
    title: "Resume",
    href: "/resume",
  },
];

export type RoutePath = (typeof routes)[keyof typeof routes];
