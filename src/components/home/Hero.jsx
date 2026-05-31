
import {
  Container,
  Grid,
  Typography,
  Button,
  Stack,
} from "@mui/material";

export default function Hero() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={6}
        alignItems="center"
        sx={{ minHeight: "90vh" }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h2"
            gutterBottom
          >
            Healing Begins With
            Feeling Heard
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            mb={4}
          >
            Professional therapy and wellness
            support designed around your
            personal journey.
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="large"
            >
              Start Today
            </Button>

            <Button
              variant="outlined"
              size="large"
            >
              Learn More
            </Button>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <img
            src="/therapy-hero.jpg"
            alt="therapy"
            width="100%"
            style={{
              borderRadius: "32px",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}