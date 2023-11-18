import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
// backend
import axios from "axios";
import API_URL from "../../config/global";
import Spinner from "../components/spinner/Spinner";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // const [successMessage,setSuccesMessage]=useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // if not preventDefault , when submit click page will refresh
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // axios connect the front and back - axios.post(req,res)
      const response = await axios.post(`${API_URL}signin/verify`, formData);
      setIsLoading(false);
      if (response.data.message === "User created Successfully") {
        alert("Registration Link has sent to your email");
      } else if (response.data.message === "User Already Exists") {
        alert("User Already Exists");
      }

      //    setSuccesMessage(response.data.message)
    } catch (error) {
      setIsLoading(false);
      console.error("error during registration", error);
    }
    // setTimeout(()=>{setSuccesMessage('') },2000)
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Container>
        <h1>Registration Form</h1>
        {/* {successMessage&&<div className="msg"> {successMessage}</div>} */}
        {/* <Button onClick={()=>hey()}>Click here</Button> */}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            ></Form.Control>
            {/* <Form.Control   type="text" name="name" value="newww" onChange={handleChange} required ></Form.Control> */}
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            ></Form.Control>
          </Form.Group>

          <Button varient="primary" type="submit">
            Register
          </Button>
          <p>
            Already have an account?<Link to="login">Login</Link>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
