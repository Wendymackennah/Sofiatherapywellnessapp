import {
  Container,
  Typography,
  Grid,
} from "@mui/material";

import TherapistCard from "../common/TherapistCard";

const therapists = [
  {
    name: "Dr. Sarah Williams",
    title: "Clinical Psychologist",
    image: "/therapist1.jpg",
  },
  {
    name: "Dr. James Carter",
    title: "Relationship Therapist",
    image: "/therapist2.jpg",
  },
  {
    name: "Emily Johnson",
    title: "Trauma Specialist",
    image: "/therapist3.jpg",
  },
];

export default function Therapists() {
  return (
    <Container sx={{ py: 12 }}>
      <Typography
        variant="h3"
        align="center"
        mb={6}
      >
        Meet Our Therapists
      </Typography>

      <Grid container spacing={4}>
        {therapists.map((therapist) => (
          <Grid
            key={therapist.name}
            size={{ xs: 12, md: 4 }}
          >
            <TherapistCard {...therapist} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}