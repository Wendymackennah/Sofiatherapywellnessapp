import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";

export default function About() {
  return (
    <Container sx={{ py: 12 }}>
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="/about-therapy.jpg"
            alt="therapy"
            sx={{
              width: "100%",
              borderRadius: 6,
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            color="primary"
            fontWeight={600}
            gutterBottom
          >
            ABOUT US
          </Typography>

          <Typography variant="h3" mb={3}>
            A Safe Space For Healing And Growth
          </Typography>

          <Typography
            color="text.secondary"
            paragraph
          >
            At Sofia Therapy Wellness, we provide
            compassionate and professional support
            for individuals, couples, and families.
          </Typography>

          <Typography
            color="text.secondary"
            paragraph
          >
            Our mission is to empower clients to
            navigate life with resilience,
            confidence, and emotional wellbeing.
          </Typography>

          <Button variant="contained">
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}