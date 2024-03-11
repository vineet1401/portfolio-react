import { useState } from "react";
import { TextField, Typography, Box } from "@mui/material";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <Typography className="contact-text" variant="h4" mb={0}>
        Get in touch
        </Typography>
        <Typography className="contact-text" variant="h6" fontSize={16}  mb={2}>
        My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!

        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            color={"primary"}
            fullWidth
            sx={{ background : "#EEEEEE", borderColor:"black"  }}
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
          sx={{ background : "#EEEEEE", borderColor:"black"  }}
            fullWidth
            color={"primary"}
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
          sx={{ background : "#EEEEEE", borderColor:"black"  }}
            fullWidth
            color={"primary"}
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </Box>
    </Box>
  );
}