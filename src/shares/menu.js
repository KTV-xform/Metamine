export const getItem = (item) => {
  const {
    label,
    key,
    icon,
    children,
    hideDesktop,
    isRedirect = false,
    badge,
    href = "",
    isComingSoon = false,
  } = item || {};
  return {
    key,
    icon,
    children,
    label,
    hideDesktop,
    isRedirect,
    href,
    badge,
    isComingSoon,
  };
};

export const MENU_ITEMS = [
  getItem({
    label: "Learn",
    key: "/learn",
    children: [
      getItem({
        label: "Whitepaper",
        key: "/whitepaper",
        isComingSoon: true,
      }),
      getItem({
        label: "Documents",
        key: "/documents",
        isComingSoon: true,
      }),
      getItem({
        label: "Roadmap",
        key: "/roadmap",
        isComingSoon: true,
      }),
    ],
  }),
  getItem({
    label: "Community",
    key: "/community",
    children: [
      getItem({
        label: "Twitter",
        key: "/twitter",
        isComingSoon: true,
      }),
      getItem({
        label: "Discord",
        key: "/discord",
        isComingSoon: true,
      }),
      getItem({
        label: "Roadmap",
        key: "/roadmap",
        isComingSoon: true,
      }),
    ],
  }),
  getItem({
    label: "Sign up",
    key: "/sign-up",
    hideDesktop: true,
    isComingSoon: true,
  }),
  getItem({
    label: "Dashboard",
    key: "/dashboard",
    hideDesktop: true,
    isComingSoon: true,
  }),
];
