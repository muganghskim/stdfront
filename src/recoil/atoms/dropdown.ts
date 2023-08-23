import { atom, atomFamily } from "recoil";

export const depthHeight = atom({
  key: "depthHeight",
  default: "0px"
});

export const hbgMenuOpen = atom({
  key: "hbgMenuOpen",
  default: false
});

export const openMenuItem = atom<string | null>({
  key: "openMenuItem",
  default: null
});
