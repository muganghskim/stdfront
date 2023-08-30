import { atom } from "recoil";

export const nameState = atom({
  key: "name",
  default: ""
});

export const useridState = atom({
  key: "userid",
  default: ""
});

export const userpassState = atom({
  key: "userpass",
  default: ""
});
