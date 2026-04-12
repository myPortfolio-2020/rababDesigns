export const routes = [
  {
    id: 1,
    title: "\u2191",
    href: "/",
  },
  {
    id: 2,
    title: "Work",
    href: "/myWork",
  },
  {
    id: 3,
    title: "Healthcare UI/UX",
    href: "/healthcare",
  },
  {
    id: 4,
    title: "Resume",
    href: "/resume",
  },
];

export type RoutePath = (typeof routes)[keyof typeof routes];
