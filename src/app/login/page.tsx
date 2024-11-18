"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import asstes from "@/assets";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { loginPatients } from "@/services/actions/loginPatients";
import { setTokenToLocalStorage } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import HealthFormProvider from "@/components/Forms/HealthFormProvider";
import HealthInput from "@/components/Forms/HealthInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; // for showing zod errors
import { useState } from "react";

export type Inputs = {
  email: string;
  password: string;
};

// create validation schema
export const ValidationSchema = z.object({
  email: z.string().email("Please, Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Inputs>();

  // const onSubmit : SubmitHandler<Inputs> = async (data) => {
  //   console.log(data);

  // When interpreter hit this line ?
  const onSubmitHandleLogin = async (data: FieldValues) => {
    console.log("login page -> 2", data);

    // modify data to send to server
    // const modifiedData = loginPatients(data);
    // console.log(modifiedData);

    try {
      const patientResponseFromServer = await loginPatients(data);
      console.log(
        "login page -> patientResponseFromServer 3",
        patientResponseFromServer
      );
      if (patientResponseFromServer?.data?.accessToken) {
        setTokenToLocalStorage(patientResponseFromServer?.data?.accessToken);
        toast.success(patientResponseFromServer?.message);
        router.push("/dashboard");
      } else {
        setError(patientResponseFromServer?.message);
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
              <Image
                src={asstes.svgs.logo}
                alt="logo"
                height={50}
                width={50}
                priority
              />
            </Box>
            <Box>
              <Typography variant="h6" component={"h6"} fontWeight={600}>
                Login HealthCare
              </Typography>
            </Box>
          </Stack>
          {error && (
            <Box>
              <Typography
                textAlign={"center"}
                sx={{
                  // justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "red",
                  color: "white",
                  padding: "2px 4px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          {/* Wrapper of form */}
          <HealthFormProvider
            onSubmit={onSubmitHandleLogin}
            resolver={zodResolver(
              /* attach | pass validation schema to form */
              ValidationSchema
            )}
            defaultValues={{
              /* For showing zod errors messages */ 
              email: "",
              password: "",
            }}
          >
            {/*   onSubmit={handleLogin} */}
            <Grid container spacing={2} my={2}>
              <Grid item md={6}>
                <HealthInput
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  // required={true}
                  type="email"
                  size="small"
                  fullWidth={true}
                  sx={{}}
                />
              </Grid>
              <Grid item md={6}>
                <HealthInput
                  name="password"
                  label="Password"
                  placeholder="Enter password"
                  // required={true}
                  type="password"
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
          </HealthFormProvider>
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
