import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import asstes from "@/assets";
import Link from "next/link";

const login = () => {
  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: 400,
            width: "100%",
            borderRadius: 2,
            boxShadow: 3,
            padding: 4,
          }}
        >
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Box>
              <Image src={asstes.svgs.logo} alt="logo" height={50} width={50} />
            </Box>
            <Box>
              <Typography variant="h6" component={"h6"} fontWeight={600}>
                Login HealthCare
              </Typography>
            </Box>
          </Stack>
          <Grid container spacing={2} my={2}>
            <Grid item md={6}>
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Password"
                variant="outlined"
                size="small"
                fullWidth={true}
              />
            </Grid>
            <Grid item md={6}></Grid>
            <Grid item md={6}>
              <Typography mr={"2px"} textAlign={"right"}>
                Forgot Password
              </Typography>
            </Grid>
          </Grid>
          <Button fullWidth>Login</Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 0px",
            }}
          >
            <Typography>
              Don't haave an account?{" "}
              <Link href={"/register"}>Create an account</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default login;
