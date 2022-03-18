import React from "react";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  console.log(props.product);
  const { setCartCount } = props;
  const { title, price, description, category, image, rating } = props.product;
  return (
    <div className="col-md-4">
      <div className="card p-2 border">
        <h1>{title.slice(0, 10)}</h1>
        <img className="w-50 m-auto" src={image} alt="" />
        <div className="d-flex justify-content-around">
          <button onClick={setCartCount} className="btn btn-success">
            Add to cart
          </button>
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-info">Details</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
