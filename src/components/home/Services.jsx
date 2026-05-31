import {
  Container,
  Grid,
  Typography,
} from "@mui/material";

import ServiceCard from "../common/ServiceCard";

const services = [
  "Individual Therapy",
  "Couples Therapy",
  "Anxiety Support",
  "Trauma Recovery",
  "Teen Therapy",
  "Virtual Sessions",
];

export default function Services() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography
        variant="h3"
        align="center"
        mb={6}
      >
        Our Services
      </Typography>

      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid
            key={service}
            size={{ xs: 12, md: 4 }}
          >
            <ServiceCard title={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}