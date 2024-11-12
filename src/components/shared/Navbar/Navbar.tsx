"use client";
import {
  getToekenFromLocalStorage,
  loggedInCheck,
} from "@/services/auth.services";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const AuthButton = dynamic(() => import("./AuthButton"), { ssr: false });

const Navbar = () => {
  const router = useRouter();

  const userInfo = getToekenFromLocalStorage();
  const userInfoString = typeof userInfo === "string" ? userInfo : "";
  // const userData = jwtDecoder(userInfoString);

  // for toggling login | logout
  // console.log(loggedInCheck());

  // logout ->
  // const logOut = () => {
  //   removeUser();
  //   router.refresh();
  //   setOut(true);
  // };

  return (
    <Container>
      <Stack
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h4" component="h1" fontSize={60}>
          <Box component="span" color="primary.main">
            H
          </Box>
          ealth Care
        </Typography>

        <Stack direction="row" justifyContent={"space-between"} gap={4}>
          <Typography
            component={Link}
            href={"/consulation"}
            sx={{ textDecoration: "none" }}
          >
            Consulation
          </Typography>
          <Typography
            component={Link}
            href={"/Healthplans"}
            sx={{ textDecoration: "none" }}
          >
            Health plans{" "}
          </Typography>
          <Typography
            component={Link}
            href={"/medicine"}
            sx={{ textDecoration: "none" }}
          >
            Medicine
          </Typography>
          <Typography
            component={Link}
            href={"/diagostics"}
            sx={{ textDecoration: "none" }}
          >
            Diagostics
          </Typography>
          <Typography
            component={Link}
            href={"/ngos"}
            sx={{ textDecoration: "none" }}
          >
            NGOs
          </Typography>
        </Stack>
        {/* {userData?.role ? (
          <Button onClick={logOut} color="error" href="/" component={Link}>
            Logout
          </Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )} */}
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
