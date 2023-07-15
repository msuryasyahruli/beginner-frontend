import React, { useEffect, useState } from "react";
import start from "../../assets/image/Rating 5 stars.png";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductHome = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2525/products")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="border rounded product">
              <Link to={`/detail/${product.id}`}>
                <img
                  src={product.photo}
                  alt="Product"
                  crossOrigin="anonymous"
                  style={{ width: "100%" }}
                />
                <div className="p-2">
                  <h5 className="card-title">{product.name}</h5>
                  <h5 className="text-danger">Rp {product.price}</h5>
                  <img src={start} />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductHome;
