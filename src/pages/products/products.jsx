import React from "react";
import "./products.css";
import CustomCard from "../../components/card/Card";

const Products = ({ products = [] }) => {
  return (
    <>
      <section className="card-container">
        {products.map((pro, ind) => {
          return (
            <CustomCard
              file={pro.file}
              name={pro.productName}
              price={pro.productPrice}
              key={ind}
            />
          );
        })}
      </section>
    </>
  );
};

export default Products;
