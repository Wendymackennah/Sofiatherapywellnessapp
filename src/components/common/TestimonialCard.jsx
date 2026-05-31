import {
  Paper,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";

export default function TestimonialCard({
  name,
  review,
}) {
  return (
    <Paper
      sx={{
        p: 4,
        borderRadius: 5,
        height: "100%",
      }}
    >
      <Typography
        color="text.secondary"
        mb={3}
      >
        "{review}"
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <Avatar>{name.charAt(0)}</Avatar>

        <Typography fontWeight={600}>
          {name}
        </Typography>
      </Stack>
    </Paper>
  );
}