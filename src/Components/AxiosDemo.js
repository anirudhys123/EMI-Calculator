import React, { useEffect, useState } from "react";
import axios from "axios";

import './FetchDemo.css';
function AxiosDemo() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    offers: [],
  });

  function loadData() {
  
    axios.get("product.json").then(response => {
        setProduct(response.data);
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

export default AxiosDemo;
