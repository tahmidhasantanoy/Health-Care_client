import Image from "next/image";
import { SpecialistType } from "./Specialist";
import { Box, Typography } from "@mui/material";

const SingleSpecialist = ({ specialist }: { specialist: SpecialistType }) => {
  console.log(specialist);
  return (
    <Box
      sx={{
        backgroundColor: "rgba(245, 245, 245, 0.8)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px 40px",
        border: "1px solid #E7E7E7",
        borderRadius: "8px", // optional: add a slight border-radius for a polished look
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // optional: subtle shadow for depth
        "& img": {
          width: "60px",
          height: "60px",
        },
        "&:hover": {
          border: "1px solid blue",
          transition: "all 0.3s ease",
        },
      }}
    >
      <Image src={specialist?.icon} alt="icon" width={60} height={60} />
      <Typography variant="h5" component="p" mt={2}>
        {specialist?.title}
      </Typography>
    </Box>
  );
};

export default SingleSpecialist;
