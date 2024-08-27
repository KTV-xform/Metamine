export const openInNewTab = (url) => {
  Object.assign(document.createElement("a"), {
    target: "_blank",
    href: url,
  }).click();
};

export const openInNewWindow = (url, width = 500, height = 300) => {
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  window.open(
    url,
    "_blank",
    `width=${width}, height=${height}, left=${left}, top=${top}`
  );
};
