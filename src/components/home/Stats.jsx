import { Container, Grid, Paper, Typography } from "@mui/material";

const stats = [
  { value: "2,500+", label: "Sessions Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Licensed Therapists" },
  { value: "24/7", label: "Support Available" },
];

export default function Stats() {
  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 4,
                bgcolor: "#fff",
              }}
            >
              <Typography
                variant="h4"
                color="primary"
                fontWeight={700}
              >
                {stat.value}
              </Typography>

              <Typography color="text.secondary">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}