import {useState} from "react";
import {TextField, Button, Container} from "@material-ui/core";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (event: any) => {
    const {name, value} = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch("https://example.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.log("Failed to send message");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="md">
      <div>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleFormChange}
            margin="normal"
            fullWidth
            required
          />
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleFormChange}
            margin="normal"
            fullWidth
            required
          />
          <TextField
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleFormChange}
            margin="normal"
            fullWidth
            multiline
            rows={4}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ContactPage;
