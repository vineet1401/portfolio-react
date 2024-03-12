import {  useState } from "react";
import { TextField, Typography, Box } from "@mui/material";

import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const alert = useAlert();

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

  const sendEmail = async(e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    try{
      if(name === "" || email === "" || message === ""){
        alert.error("All field Required")
      }
      else{
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
        )
        alert.success("Thank You, I will get back to you soon");
        resetForm();
      }
    }catch(error) {
      alert.error("Oops! Try again");
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
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
            transition= "Bounce"
            />
        </form>
      </Box>
    </Box>
  );
}
