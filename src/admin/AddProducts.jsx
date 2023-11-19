import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./admin.css";
import axios from "axios";
import API_URL from "../../config/global";
import { Link, useNavigate } from "react-router-dom";

function AddProduct() {
  const [validated, setValidated] = useState(false);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [files, setFiles] = useState([]);
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    const formData = new FormData();
    formData.append("photo", files[0]);
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);

    addProduct(formData);
    setValidated(true);
  };

  const addProduct = async (formData) => {
    try {
      const response = await axios.post(`${API_URL}product/create`, formData);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="add-product-form">
      <h3>Add Product</h3>
      <hr />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 jumbotron">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Product name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="productName"
              onBlur={({ target }) => setProductName(target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter product name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>Product price</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="productPrice"
              onBlur={({ target }) => setProductPrice(target.value)}
            />
            <Form.Control.Feedback type="invalid">
              {" "}
              Please enter product price
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Image"
              required
              onBlur={({ target }) => setFiles(target.files)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid image.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Add</Button>
          <Button onClick={logout}>Logout</Button>
      </Form>
    </div>
  );
}

export default AddProduct;
