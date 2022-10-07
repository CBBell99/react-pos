import axios from "axios";
import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

function POSPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    const result = await axios.get("products");
    setProducts(await result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <MainLayout>
      <div className="row">
        <div className="col-lg-8">
          {isLoading ? (
            "Loading"
          ) : (
            <div className="row">
              {" "}
              {products.map((product, key) => (
                <div key={key} className="col-lg-4">
                  <div className="border"></div>
                  <p>{product.name}</p>
                  <img
                    src={product.image}
                    className="img-fluid"
                    alt={product.name}
                  />
                  <p>${product.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-lg-4"></div>
      </div>
    </MainLayout>
  );
}

export default POSPage;
