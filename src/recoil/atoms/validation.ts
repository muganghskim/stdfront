import { atom } from "recoil";

export const usernameState = atom({
  key: "username",
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
