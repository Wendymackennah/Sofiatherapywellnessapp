import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function TherapistCard({
  name,
  title,
  image,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 5,
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={image}
      />

      <CardContent>
        <Typography variant="h6">
          {name}
        </Typography>

        <Typography color="text.secondary">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}