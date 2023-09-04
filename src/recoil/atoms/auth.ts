import { atom } from "recoil";
import axios from "axios";

interface User {
  username: string;
  email: string;
  token?: string;
}

interface EmailAuth {
  email: string;
  code: string;
}

export const emailAuthState = atom<EmailAuth>({
  key: "emailAuth",
  default: { email: "", code: "" }
});

export const userState = atom<User>({
  key: "user",
  default: { username: "", email: "" }
});

export const isLoggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: localStorage.getItem("token") ? true : false
});

export const updateLoginStatus = async () => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};

export const updateAccessToken = async (refreshToken: string) => {
  const response: any = await axios.post(
    "http://localhost:8096/api/update-token",
    { refreshToken }
  );
  const newAccessToken = response.data.accessToken;
  localStorage.setItem("token", newAccessToken);
  return newAccessToken;
};

export const login = async (formData: { email: string; password: string }) => {
  const response = await axios.post(
    "http://localhost:8096/api/login",
    formData
  );
  const { username, email, token, refreshToken } = response.data;
  console.log("Login response email:", email); // 응답으로 받은 email 확인
  localStorage.setItem("token", token); // 로컬 스토리지에 토큰 저장
  localStorage.setItem("email", email); // 로컬 스토리지에 email 저장
  localStorage.setItem("refreshToken", refreshToken); // 로컬 스토리지에 리프레쉬 토큰 저장
  return { username, email, token, refreshToken };
};

export const signup = async (formData: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(
    "http://localhost:8096/api/signup",
    formData
  );
  const { username, email, token, refreshToken } = response.data;

  localStorage.setItem("token", token); // 로컬 스토리지에 토큰 저장
  localStorage.setItem("email", email); // 로컬 스토리지에 email 저장
  localStorage.setItem("refreshToken", refreshToken); // 로컬 스토리지에 리프레쉬 토큰 저장
  return { username, email, token, refreshToken };
};

export const logout = async () => {
  try {
    await axios.post("http://localhost:8096/api/logout");

    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("email"); // 로컬 스토리지에서 userId 제거
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

export const sendVerificationEmail = async (formData: { email: string }) => {
  try {
    const response = await axios.post(
      "http://localhost:8096/api/send-verification-email",
      formData
    );

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    throw error; // 에러를 다시 던져서 상위 함수에서 catch 할 수 있게 합니다.
  }
};

export const verifyEmail = async (formData: {
  email: string;
  code: string;
}) => {
  try {
    const response = await axios.post(
      "http://localhost:8096/api/verify-email",
      formData
    );

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    throw error; // 에러를 다시 던져서 상위 함수에서 catch 할 수 있게 합니다.
  }
};
