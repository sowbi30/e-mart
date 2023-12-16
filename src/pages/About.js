import React, { useState } from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import { useProductContext } from "../context/productcontex";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 5rem;
  justify-content: space-around; 
  margin: 2px;
  border: 2px solid lavender;
  background: lavender;
`;

const FormContainer = styled.div`
  background: lightgreen;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormInput = styled.input`
  background: lavender;
  padding: 0.5rem;
  width: 80%;
  align-self: center;
  border: 1px solid lavender; 
  border-radius: 4px; 
  lineSpace: '1rem';
  gap:3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const FormButton = styled.button`
  background: ${({ theme }) => theme.colors.btn};
  color: white;
  padding: 5px;
  cursor: pointer;
  width: 10%; 
  align-self: center; /* Center the button */
`;

const ValidationError = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
// Define a Card component
const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  background: lightyellow;
  border-radius: 2px;
  text-align:center;
`;

const CardImage = styled.img`
  width: 50%;
  height: 70%;
  justify-self: 'center';
  align-items: 'center';
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.heading};
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
`;


const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Sowbi-Mart",
    textColor: "lavender",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
    imageUrl: "",
  });

  const [reviews, setReviews] = useState([]);
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    review: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { name: "", email: "", review: "", imageUrl: "" };

    // Validate form data before adding to reviews
    if (formData.name.trim() === "") {
      newErrors.name = "Please enter your name";
    }

    if (formData.email.trim() === "" || !formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.review.trim() === "") {
      newErrors.review = "Please enter your review";
    }

    if (formData.imageUrl.trim() === "") {
      newErrors.imageUrl = "Please enter the image URL";
    }

    // If there are validation errors, update the state and stop the submission
    if (Object.values(newErrors).some((error) => error !== "")) {
      setFormErrors(newErrors);
      return;
    }

    setReviews((prevReviews) => [...prevReviews, formData]);

    // Clear form data and errors after submission
    setFormData({ name: "", email: "", imageUrl: "", review: "" });
    setFormErrors({ name: "", email: "", review: "", imageUrl: "" });
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />

      {/* Form Container */}
      <h2 style={{ color: 'green', textAlign: 'center' }}>Your Review's Make Us Grow</h2>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <ValidationError>{formErrors.name}</ValidationError>

          <FormInput
            type="email"
            name="email"
            placeholder="Enter your Mail"
            value={formData.email}
            onChange={handleChange}
          />
          <ValidationError>{formErrors.email}</ValidationError>

          <FormInput
            type="text"
            name="review"
            placeholder="Review"
            value={formData.review}
            onChange={handleChange}
          />
          <ValidationError>{formErrors.review}</ValidationError>

          <FormInput
            type="text"
            name="imageUrl"
            placeholder="Place your Image URL/any image "
            value={formData.imageUrl}
            onChange={handleChange}
          />
          <ValidationError>{formErrors.imageUrl}</ValidationError>

          <p style={{ textAlign: "center", color: 'grey' }}>
            You can use this URL:<br />https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?rs=1&pid=ImgDetMain
          </p>

          <FormButton style={{ background: 'pink', color: 'purple', borderStyle: 'none', borderRadius: '4px' }} type="submit">Submit</FormButton>
        </Form>
      </FormContainer>

      {/* Card Container */}
      <CardContainer>
        {reviews.map((review, index) => (
          <Card key={index}>
            <CardImage src={review.imageUrl} alt={`Card Image ${index + 1}`} />
            <CardTitle>{review.name}</CardTitle> <br />
            <CardDescription>{review.review}</CardDescription>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};

export default About;
