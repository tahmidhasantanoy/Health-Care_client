// set to local storage
export const setLocalStorageWithKey = (key: string, accessToken: string) => {
  if (!key || typeof window === "undefined") return;
  return localStorage.setItem(key, accessToken);
};
