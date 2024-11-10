// want to create a function for sending data to the localStorage
import { setLocalStorageWithKey } from "@/utils/local-storage";
import { authKey } from "../constant/authKey";

export const setTokenToLocalStorage = (accessToken: string) => {

  return setLocalStorageWithKey(authKey, accessToken);
};
