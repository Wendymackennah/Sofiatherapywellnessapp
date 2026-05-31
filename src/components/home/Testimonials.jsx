import {
  Container,
  Typography,
  Grid,
} from "@mui/material";

import TestimonialCard from "../common/TestimonialCard";

const testimonials = [
  {
    name: "Mary W",
    review:
      "The support I received changed my life.",
  },
  {
    name: "John K",
    review:
      "Professional, caring and incredibly helpful.",
  },
  {
    name: "Grace M",
    review:
      "A welcoming environment for healing.",
  },
];

export default function Testimonials() {
  return (
    <Container sx={{ py: 12 }}>
      <Typography
        variant="h3"
        align="center"
        mb={6}
      >
        Client Testimonials
      </Typography>

      <Grid container spacing={4}>
        {testimonials.map((item) => (
          <Grid
            key={item.name}
            size={{ xs: 12, md: 4 }}
          >
            <TestimonialCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}