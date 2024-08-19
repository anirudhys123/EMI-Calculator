import React, { useEffect, useState } from "react";
import $ from "jquery"
import './FetchDemo.css';
function JqueryDemo() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    offers: [],
  });

  function loadData() {
    $.ajax({
        method: 'get',
        url: 'product.json',
        success : (response) => {
            setProduct(response);
        },
        error :(ex) => {
            console.log(ex);
        } 
    })
    
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="h">
      <div className="row">
        <div className="col-3 ">
          <img src={product.image} alt={product.title} height={400} />
        </div>
        <div className="col-9">
          <h1 className="fw-bold mt-3">{product.title}</h1>
          <h2 className="mt-4 fw-bold">
            {product.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </h2>
          <div>
            <ul className="list-unstyled mt-4">
              {product.offers.map((product) => 
                 
                  <li className="bi bi-tag-fill text-success mt-2 fs-3">
                    <span className="text-secondary fs-4">{product}</span>
                  </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JqueryDemo;
