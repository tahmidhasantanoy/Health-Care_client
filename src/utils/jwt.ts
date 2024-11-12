import { jwtDecode } from "jwt-decode";
interface IDecodedToken {
  exp: number;
  iat: number;
  id: string;
  role: string;
}

export const jwtDecoder = (authToken: string) => {
  if (!authToken) return;
  const decodedToken: IDecodedToken = jwtDecode(authToken);
  return {
    ...decodedToken,
    role: decodedToken?.role?.toLowerCase(),
  };
};
