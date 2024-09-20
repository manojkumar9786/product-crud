import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";


const ProductForm = ({ productId, onSave, setOpenForm, onEdit, product, setProduct }) => {

  useEffect(() => {
    if (productId) {
      fetch(`http://localhost:8000/products/${productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [productId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = productId ? "PUT" : "POST";
    const api = productId ? `http://localhost:8000/products/${productId}` : "http://localhost:8000/product";

    fetch(api, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => onSave(data));
    setOpenForm(false)
  };

  const handleCancel = ()=>{
    setOpenForm(false);
    onEdit(null)
    setProduct({
      productName: "",
      price: 0,
      oldPrice: 0,
      category: "",
      isActive: false,
      description: "",
    })
  }

  return (
    <div className="px-8">
    <div className="flex justify-end py-5 text-[#8A8A8A]">
          <button onClick={handleCancel}>
            <IoMdClose size={18} />
          </button>
        </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mb-5">
            <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            placeholder="Product Name"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="number"
            name="oldPrice"
            value={product.oldPrice}
            onChange={handleChange}
            placeholder="Old Price"
            className="p-2 border border-gray-300 rounded"
          />
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          >
            <option value="">Select Category</option>
            <option value="Vegetables">Vegetables</option>
            <option value="fruits & Nuts">Fruits & Nuts</option>
            <option value="Dairy & Creams">Dairy & Creams</option>
            <option value="Packages Food">Packages Food</option>
            <option value="Staples">Staples</option>
          </select>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isActive"
              checked={product.isActive}
              onChange={handleChange}
              className="mr-2"
            />
            Active
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Description"
            className="p-2 border border-gray-300 rounded"
            rows="3"
          />
          <div className="flex flex-col space-y-2">
            <button className="bg-green-700 text-white rounded-lg py-2" type="submit">{productId ? "Update" : "Add"} Product</button>
            <button className="bg-red-700 text-white rounded-lg py-2" onClick={handleCancel}>Cancel</button>
          </div>
            </form>
    </div>
  );
};

export default ProductForm;
