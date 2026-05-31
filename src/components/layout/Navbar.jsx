import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          py: 1,
        }}
      >
        <Typography
          variant="h5"
          color="primary"
          fontWeight={700}
        >
          Sofia Therapy Wellness
        </Typography>

        <Box display="flex" gap={2}>
          <Button color="inherit">Services</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>

          <Button
            variant="contained"
            color="primary"
          >
            Book Session
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}