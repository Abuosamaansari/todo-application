import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import CRUDPage from "./CRUDPage";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p className="text-center mt-8">Loading...</p>;

  return (
    
    <div className="p-8">
      <CRUDPage/>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product) => (
            <tr key={product.id} className="text-center">
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">{product.title}</td>
              <td className="border px-4 py-2">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
