"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTube from "@mui/icons-material/YouTube";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    /* Box doesn't contain div */
    <Box className="bg-gray-900" py={6}>
      <Stack direction="row" justifyContent="center" gap={3}>
        <Typography
          component={Link}
          color={"#fff"}
          href={"/consulation"}
          sx={{ textDecoration: "none" }}
        >
          Consulation
        </Typography>
        <Typography
          component={Link}
          color={"#fff"}
          href={"/Healthplans"}
          sx={{ textDecoration: "none" }}
        >
          Health plans{" "}
        </Typography>
        <Typography
          component={Link}
          color={"#fff"}
          href={"/medicine"}
          sx={{ textDecoration: "none" }}
        >
          Medicine
        </Typography>
        <Typography
          component={Link}
          color={"#fff"}
          href={"/diagostics"}
          sx={{ textDecoration: "none" }}
        >
          Diagostics
        </Typography>
        <Typography
          component={Link}
          color={"#fff"}
          href={"/ngos"}
          sx={{ textDecoration: "none" }}
        >
          NGOs
        </Typography>
      </Stack>
      <br />
      <Stack direction={"row"} justifyContent={"center"} gap={4}>
        <FacebookOutlinedIcon className="text-white h-40 w-40" />
        <Instagram className="text-white h-40 w-40" />
        <YouTube className="text-white h-40 w-40" />
        <LinkedIn className="text-white h-40 w-40" />
      </Stack>
      <hr className="border-dashed" />
      <Stack direction="row" justifyContent={"space-between"} alignItems={"center"} mx={8}>
        <Typography component={"p"} color="white" className="text-white">
          Health care all right reversed 2024
        </Typography>
        <Typography  color="white" fontWeight={600}>
          <Box component={"span"} color={"primary.main"}>
            H
          </Box>
          ealth care
        </Typography>
        <Typography component={"p"} color="white" className="text-white">
          terms & conditons
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
