// want to create a function for sending data to the localStorage
import {
  getTokenFromLocalStorageWithKey,
  removeUserFromLocalStorageWithKey,
  setTokenToLocalStorageWithKey,
} from "@/utils/local-storage";
import { authKey } from "../constant/authKey";

// Setting token to the localStorage
export const setTokenToLocalStorage = (accessToken: string) => {
  return setTokenToLocalStorageWithKey(authKey, accessToken);
};

// Getting token from the localStorage
export const getToekenFromLocalStorage = () => {
  return getTokenFromLocalStorageWithKey(authKey);
};

// Remove user from the localStorage
export const removeUser = () => {
  return removeUserFromLocalStorageWithKey(authKey);
};

// Checked loggedIn or not
export const loggedInCheck = () => {
  const authToken = getToekenFromLocalStorage();
  console.log(authToken);
  if (!authToken || typeof window === "undefined") return !!authKey;
  else return !!authKey;
};
