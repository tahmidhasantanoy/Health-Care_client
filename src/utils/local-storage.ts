// local storage all functions
export const setTokenToLocalStorageWithKey = (
  authKey: string,
  accessToken: string
) => {
  if (!authKey || typeof window === "undefined") return;
  return localStorage.setItem(authKey, accessToken);
};

export const getTokenFromLocalStorageWithKey = (authKey: string) => {
  if (!authKey || typeof window === "undefined") {
    // console.log(authKey);
    return;
  }
  return localStorage.getItem(authKey);
};

export const removeUserFromLocalStorageWithKey = (authKey: string) => {
  if (!authKey || typeof window === "undefined") {
    // console.log(authKey);
    return;
  }
  return localStorage.removeItem(authKey);
};
