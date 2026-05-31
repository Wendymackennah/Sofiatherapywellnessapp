import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#1d2d29",
        color: "#fff",
        py: 5,
        mt: 8,
      }}
    >
      <Container>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          justifyContent="space-between"
          spacing={3}
        >
          <Box>
            <Typography variant="h5">
              Sofia Therapy Wellness
            </Typography>

            <Typography
              color="rgba(255,255,255,.7)"
            >
              © 2026 All Rights Reserved
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={3}
          >
            <Link color="inherit">
              Facebook
            </Link>

            <Link color="inherit">
              Instagram
            </Link>

            <Link color="inherit">
              LinkedIn
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}