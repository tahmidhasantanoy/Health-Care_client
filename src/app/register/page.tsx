import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";

const registerPage = () => {
  return (
    <Container>
      <Stack
        sx={{ height: "100vh" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            padding: 4,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Box>
              <Image
                src={assets.svgs.logo}
                alt="choose us image"
                height={50}
                width={50}
              />
            </Box>
            <Box>
              <Typography variant="h6" component={"h6"} fontWeight={600}>
                Patient Registration
              </Typography>
            </Box>
          </Stack>
          <Box>
            <form>
              <Grid container spacing={2} my={2}>
                <Grid item md={12}>
                  <TextField
                    label="Name"
                    type="text"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Contact Number"
                    type="number"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Address"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={12}>
                  <Button type="submit" fullWidth>
                    Register
                  </Button>
                </Grid>
                <Grid item md={12}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography>
                      Do you have an account?{" "}
                      <Link color="primary.main" href={"/login"}>
                        Login
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default registerPage;
