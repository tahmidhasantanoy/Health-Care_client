import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import grid from "@/assets/svgs/grid.svg";
import arrow from "@/assets/svgs/arrow.svg";
import doctor1 from "@/assets/images/doctor1.png";
import doctor2 from "@/assets/images/doctor2.png";
import doctor3 from "@/assets/images/doctor3.png";
import Stetoscope from "@/assets/images/Stetoscope.png";

const heroSection = () => {
  return (
    <Container sx={{ display: "flex", direction: "row", my: 16 }}>
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={grid} alt="grid" />
        </Box>
        <Box my={2}>
          <Typography variant="h3" component={"h3"} fontWeight={600}>
            Healthier hearts
          </Typography>
          <Typography variant="h3" component={"h3"} fontWeight={600}>
            Comes from
          </Typography>
          <Typography
            variant="h3"
            component={"h3"}
            fontWeight={600}
            color="primary.main"
          >
            Preventive care
          </Typography>
        </Box>
        <Typography color="#696868" fontWeight={400} sx={{}} my={2}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laborum
          ex voluptas possimus hic deserunt recusandae. At, ipsum! Expedita
          deleniti cumque doloremque natus tempore, molestias reprehenderit,
          reiciendis iste est nam pariatur soluta quam odio omnis veritatis
          sequi perferendis voluptate facere.
        </Typography>
        <Stack direction="row" gap={3}>
          <Button>Make appointment</Button>
          <Button variant="outlined">Contact us</Button>
        </Stack>
      </Box>
      {/* Right side */}
      <Box sx={{ display: "flex", flex: 1, position: "relative" }}>
        {/* Arrow  ok*/}
        <Box sx={{ position: "absolute", left: 160, top: -40 }}>
          <Image src={arrow} alt="icon image"></Image>
        </Box>
        {/* Arrow */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box mt={4}>
            <Image width={240} height={380} src={doctor1} alt="icon image" />
          </Box>
          <Box>
            <Image width={240} height={350} src={doctor2} alt="icon image" />
          </Box>
          <Box sx={{ position: "absolute", top: 200, left: 120 }}>
            <Image width={240} height={240} src={doctor3} alt="icon image" />
          </Box>
          <Box sx={{ position: "absolute", top: 280, right: 30, zIndex: -1 }}>
            <Image width={180} height={180} src={Stetoscope} alt="icon image" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default heroSection;
