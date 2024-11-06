import { Box, Container, Grid, Typography } from "@mui/material";
import ChooseUsImage from "@/assets/choose-us.png";
import Image from "next/image";
import assets from "@/assets";

const WhyUS = () => {
  const serviceData = [
    {
      imageSrc: assets.svgs.award,
      title: "Mountain Adventure",
      description:
        "Experience the thrill of mountain adventures, with breathtaking views and exhilarating activities.",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Beach Paradise",
      description:
        "Relax and unwind on pristine beaches, soaking up the sun and enjoying the calming waves.",
    },
    {
      imageSrc: assets.svgs.award,
      title: "City Life",
      description:
        "Explore the bustling city life with diverse cultures, delicious cuisine, and vibrant nightlife.",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Desert Safari",
      description:
        "Embark on a desert safari for an unforgettable experience in a vast, scenic desert landscape.",
    },
  ];

  return (
    <Container>
      <Box>
        <Box textAlign={"center"}>
          <Typography
            variant="h6"
            component={"h6"}
            fontWeight={300}
            color="primary.main"
          >
            Why Us
          </Typography>
          <Typography variant="h4" component={"h4"} fontWeight={600}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={2} my={5} alignItems="center">
          <Grid item md={6} /*  sx={{ margin: "10px" }}  */>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(245,245,245, 1)",
                borderRadius: "10px 10px 100px 10px",
                margin: "20px 0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#FFFF",
                  padding: 2,
                  mx: 1,
                }}
              >
                <Image
                  src={serviceData[0].imageSrc}
                  alt="Award icon"
                  width={60}
                  height={60}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h4"
                  component={"h4"}
                  fontWeight={600}
                  sx={{ px: 3 }}
                >
                  {serviceData[0].title}
                </Typography>
                <Typography fontWeight={300} sx={{ px: 3 }}>
                  {serviceData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(245,245,245, 1)",
                borderRadius: "10px 100px 10px 10px",
                margin: "20px 0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#FFFF",
                  padding: 2,
                  mx: 1,
                }}
              >
                <Image
                  src={serviceData[1].imageSrc}
                  alt="Award icon"
                  width={60}
                  height={60}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h4"
                  component={"h4"}
                  fontWeight={600}
                  sx={{ px: 3 }}
                >
                  {serviceData[1].title}
                </Typography>
                <Typography fontWeight={300} sx={{ px: 3 }}>
                  {serviceData[1].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(245,245,245, 1)",
                borderRadius: "10px 10px 100px 10px",
                margin: "20px 0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#FFFF",
                  padding: 2,
                  mx: 1,
                }}
              >
                <Image
                  src={serviceData[1].imageSrc}
                  alt="Award icon"
                  width={60}
                  height={60}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h4"
                  component={"h4"}
                  fontWeight={600}
                  sx={{ px: 3 }}
                >
                  {serviceData[2].title}
                </Typography>
                <Typography fontWeight={300} sx={{ px: 3 }}>
                  {serviceData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(245,245,245, 1)",
                borderRadius: "10px 100px 10px 10px",
                margin: "20px 0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#FFFF",
                  padding: 2,
                  mx: 1,
                }}
              >
                <Image
                  src={serviceData[3].imageSrc}
                  alt="Award icon"
                  width={60}
                  height={60}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="h4"
                  component={"h4"}
                  fontWeight={600}
                  sx={{ px: 3 }}
                >
                  {serviceData[3].title}
                </Typography>
                <Typography fontWeight={300} sx={{ px: 3 }}>
                  {serviceData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            md={6}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image src={ChooseUsImage} alt="choose-us image" width={400} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUS;
