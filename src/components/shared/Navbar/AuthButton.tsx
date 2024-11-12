/* 
I want to render it from browser, because it need a localStorage accessToken data.
Also create a AuthButton component , because lazy loading want to import which compoenent
is have to show delay.

React try to pre-render HTML but not found accessToken immidaitly, so it throw error, 
## Here i solve react hydration error "lazy loading" ##
*/
import {
  getToekenFromLocalStorage,
  removeUser,
} from "@/services/auth.services";
import { jwtDecoder } from "@/utils/jwt";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AuthButton = () => {
  const [out, setOut] = useState(false);
  const router = useRouter();
  const userInfo = getToekenFromLocalStorage();
  const userInfoString = typeof userInfo === "string" ? userInfo : "";
  const userData = jwtDecoder(userInfoString);

  const logOut = () => {
    removeUser();
    router.refresh();
    setOut(true);
  };
  return (
    <>
      {userData?.role ? (
        <Button onClick={logOut} color="error" href="/" component={Link}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
