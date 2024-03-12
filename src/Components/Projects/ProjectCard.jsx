import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({item}) {
  return (
    <Card sx={{ width: "400px" , height:"400px", display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          width={"100%"}
          src={item.icon}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: "600"}}>
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
