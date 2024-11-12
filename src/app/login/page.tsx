"use client";
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
import { useForm, SubmitHandler } from "react-hook-form";
import { loginPatients } from "@/services/actions/loginPatients";
import { setTokenToLocalStorage } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    // modify data to send to server
    // const modifiedData = loginPatients(data);
    // console.log(modifiedData);

    try {
      const patientResponseFromServer = await loginPatients(data);
      console.log(patientResponseFromServer);
      if (patientResponseFromServer?.data?.accessToken) {
        setTokenToLocalStorage(patientResponseFromServer?.data?.accessToken);
        toast.success(patientResponseFromServer?.message);
        router.push("/");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} my={2}>
              <Grid item md={6}>
                <TextField
                  {...register("email", { required: true })}
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  {...register("password", { required: true })}
                  label="Password"
                  type="password"
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
            <Button type="submit" fullWidth>
              Login
            </Button>
          </form>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 0px",
            }}
          >
            <Typography>
              Don&apos;t have an account?{" "}
              <Link href={"/register"}>Create an account</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
