import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/Home.css";
import { Link } from "react-router-dom";
// backend
import axios from "axios";
import API_URL from "../../config/global";
import { useEffect, useState } from "react";
import Products from "./products/products";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// put single quote for import css
import { Link, useNavigate } from "react-router-dom";
const navigate = useNavigate();
const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [fetchedproducts, setFetchedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(`${API_URL}product/get`);
    setFetchedProducts(res.data);
    setAllProducts(res?.data);
  };

  const filteredData = fetchedproducts.filter((item) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

  useEffect(() => {
    if (searchText !== "") {
      setFetchedProducts(filteredData);
    } else {
      setFetchedProducts(allProducts);
    }
  }, [searchText]);

//   Fetch data from backend ----> 1
  useEffect(() => {
    getProducts();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="sidebar">
        <h6 className="m-5">FIlters</h6>
      </div>
      <div className="pro-container">
        <div className="navbar">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="#">TAJMAHAL SHOE MART</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                ></Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={({ target }) => setSearchText(target.value)}
                  />
                  <Button variant="outline-success">Search</Button>
                       <Button variant="outline-light" onClick={logout}>Logout</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <h1>Products</h1>
        <Products products={fetchedproducts} />
      </div>
    </>
  );
};

export default Home;
