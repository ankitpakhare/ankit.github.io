import React, { useState } from "react";
import axios from "axios";

const Api = () => {
  const [items, setItems] = useState([]);

  const getFashion = () => {
    const options = {
      method: "GET",
      url: "https://fashion-products1.p.rapidapi.com/products",
      headers: {
        "x-rapidapi-key": "3cddf0b557mshb1d0e8ce4bb561dp15456ejsn64164700a71c",
        "x-rapidapi-host": "fashion-products1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setItems(response.data.products); // API returns { products: [...] }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-light pb-5">
      <div className="text-center">
        <button
          className="btn btn-outline-dark fs-5 m-5 px-4"
          onClick={getFashion}
        >
          Get Fashion Items
        </button>
      </div>

      <div className="container">
        <div className="row">
          {items?.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="card mb-4 rounded-4 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top rounded-4"
                  style={{ height: 300, objectFit: "cover" }}
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted">{item.category}</p>
                  <p className="fw-bold">₹ {item.price}</p>
                  <button className="btn btn-dark w-100">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Api;
