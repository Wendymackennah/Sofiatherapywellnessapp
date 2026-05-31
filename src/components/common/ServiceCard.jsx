import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function ServiceCard({
  title,
}) {
  return (
    <Card
      sx={{
        height: "100%",
        p: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}