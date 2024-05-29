// app/contact/page.tsx
import { Container, Input, Textarea, Button, Text } from "@nextui-org/react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Container>
      <Text h1>Contact Us</Text>
      <Text>Email: info@betavee.com</Text>
      <Text>Phone: +123-456-7890</Text>
      <Text>Address: Betavee, 123 Alibaba Street, City, Country</Text>
      <form onSubmit={handleSubmit}>
        <Input
          fullWidth
          label="Name"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          css={{ mb: "20px" }}
        />
        <Input
          fullWidth
          type="email"
          label="Email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          css={{ mb: "20px" }}
        />
        <Textarea
          fullWidth
          label="Message"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          css={{ mb: "20px" }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}
