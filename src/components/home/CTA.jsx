import {
  Container,
  Paper,
  Typography,
  Button,
  Stack,
} from "@mui/material";

export default function CTA() {
  return (
    <Container sx={{ py: 12 }}>
      <Paper
        sx={{
          p: 8,
          borderRadius: 6,
          textAlign: "center",
          bgcolor: "primary.main",
          color: "white",
        }}
      >
        <Typography
          variant="h3"
          mb={3}
        >
          Begin Your Wellness Journey Today
        </Typography>

        <Typography mb={4}>
          Book your first therapy session and
          take the next step toward emotional
          wellbeing.
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
        >
          <Button
            variant="contained"
            color="secondary"
          >
            Book Appointment
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}