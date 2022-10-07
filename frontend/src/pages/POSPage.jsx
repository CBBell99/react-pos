import axios from "axios";
import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";

function POSPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await axios.get("products");
    setProducts(await result.data);
  };

  useEffect(() => {
    fetchProducts();
  });

  return <MainLayout>POS Content</MainLayout>;
}

export default POSPage;
