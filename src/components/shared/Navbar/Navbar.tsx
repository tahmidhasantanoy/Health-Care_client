import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
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
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
