import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({item}) {
  return (
    <Card sx={{ width: "400px" , height:"400px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          src="https://www.oberlo.com/media/1603954923-image23-1.png?w=1824&fit=max"
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="h6" color="text.primary">
            Tech Stack
          </Typography>
          <Typography variant="body2" color="text.primary">
            {item.stack}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
