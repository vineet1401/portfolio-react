import { useState } from "react";
import { TextField, Typography, Box } from "@mui/material";

import emailjs from "@emailjs/browser";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";


export default function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const updateName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const updateMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  const [errorType, setErrorType] = useState({
    error: false,
    type: "",
    message: "",
  });

  const handleClose = () => {
    setErrorType({ error: false, type: "", severity: "", message: "" });
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    try {
      if (name === "" || email === "" || message === "") {
        setErrorType({
          error: true,
          severity: "error",
          type: "#FF033E",
          message: "All field Required",
        });
        setTimeout(() => {
          setErrorType({ error: false, type: "", severity: "", message: "" });
        }, 3000);
        // alert.error("All field Required");
      } else {
        await emailjs.send(
          "service_2rgcf7o",
          "template_aso6y88",
          {
            to_name: name,
            from_name: "Vineet",
            message: message,
            email: email,
            reply_to: "cyrax1401@gmail.com",
          },
          "ffkxYVV5nIPb0FHBe"
        );
        setErrorType({
          error: true,
          severity: "success",
          type: "#03C03C",
          message: "Thank You, I will get back to you soon",
        });
        resetForm();
        setTimeout(() => {
          setErrorType({ error: false, type: "", severity: "", message: "" });
        }, 3000);
      }
    } catch (error) {
      setErrorType({
        error: true,
        severity: "error",
        type: "#FF033E",
        message: "Oops! Try again",
      });
      setTimeout(() => {
        setErrorType({ error: false, type: "", severity: "", message: "" });
      }, 3000);
    }
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
        <Typography className="contact-text" variant="h6" fontSize={16} mb={2}>
          My inbox is always open. Whether you have a question or just want to
          say hello, I will try my best to get back to you!
        </Typography>
        <form>
          <TextField
            color={"primary"}
            fullWidth
            sx={{ background: "#EEEEEE", borderColor: "black" }}
            label="Name"
            margin="normal"
            value={name}
            onChange={updateName}
            required
          />
          <TextField
            sx={{ background: "#EEEEEE", borderColor: "black" }}
            fullWidth
            color={"primary"}
            label="Email"
            margin="normal"
            value={email}
            onChange={updateEmail}
            required
            type="email"
          />
          <TextField
            sx={{ background: "#EEEEEE", borderColor: "black" }}
            fullWidth
            color={"primary"}
            label="Message"
            margin="normal"
            value={message}
            onChange={updateMessage}
            required
            multiline
            rows={4}
          />
          <button onClick={sendEmail} className="button" type="submit">
            Submit
          </button>
          {errorType.error && (
            <Stack spacing={2}>
              <Alert
              variant="filled"
                sx={{
                  fontSize:"1.2rem",
                  fontWeight:"600",
                  width: "50vw",
                  position: "fixed",
                  top: "10vh",
                  left: "25vw",
                  zIndex: "50",
                }}
                severity={errorType.severity}
                onClose={handleClose}
              >
                {errorType.message}
              </Alert>
            </Stack>
          )}
        </form>
      </Box>
    </Box>
  );
}
