import { Box, Button, Container, Stack, Typography } from "@mui/material";
import SingleSpecialist from "./SingleSpecialist";
export type SpecialistType = {
  id: string;
  name: string;
  icon: string;
};

const Specialist = async () => {
  const responseFromSpecialist = await fetch(
    `http://localhost:5000/api/v1/specialties`,
    {
      next: { revalidate: 30 }, // revalidate every 30 seconds
    }
  );
  const specialists = await responseFromSpecialist.json();
  const allSpecialists = specialists.data;

  return (
    <Container sx={{ my: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Box textAlign={"start"}>
          <Typography variant="h4" component={"h4"} fontWeight={600}>
            Explore Treatments across specialists
          </Typography>
          <Typography fontWeight={300}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            alias?
          </Typography>
        </Box>
        {/* Show all specialists */}
        <Stack direction={"row"} gap={4} my={4}>
          {allSpecialists.slice(0, 6).map((specialist: SpecialistType) => (
            <SingleSpecialist key={specialist.id} specialist={specialist} />
          ))}
        </Stack>
        <Button variant="outlined">View All</Button>
      </Box>
    </Container>
  );
};

export default Specialist;
