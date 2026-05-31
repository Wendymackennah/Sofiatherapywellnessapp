import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
} from "@mui/material";

export default function Contact() {
  return (
    <Container sx={{ py: 12 }}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h3" mb={3}>
            Contact Us
          </Typography>

          <Typography color="text.secondary">
            We'd love to hear from you.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 5,
            }}
          >
            <TextField
              fullWidth
              label="Name"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Email"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={5}
              margin="normal"
            />

            <Button
              variant="contained"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}