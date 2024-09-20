import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList'
import ProductForm from './ProductForm';

const Home = () => {

    const [openForm, setOpenForm] = useState(false);
    const [editingProductId, setEditingProductId] = useState(null);
    const [product, setProduct] = useState({
        productName: "",
        price: 0,
        oldPrice: 0,
        category: "",
        isActive: false,
        description: "",
      });

    const handleSave = (product) => {
        setEditingProductId(null);
    };

    const handleAddproduct = ()=>{
        setOpenForm(true);
        setEditingProductId(null)
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
    <div className='px-10 py-[22px] w-full'>

    <div className='text-end mb-5'>
      <button onClick={handleAddproduct} className='bg-green-600 text-white px-3 py-1 rounded-lg'>Add Product</button>
    </div>

    <ProductsList setOpenForm={setOpenForm} onEdit={setEditingProductId} />
    <div
        className={`h-[100vh] absolute bg-white w-[617px] border-l transition-all duration-300 ease-in-out top-0 right-0 shadow-md ${
          openForm ? "block" : "hidden"
        }`}
      >
        <ProductForm setOpenForm={setOpenForm} product={product} setProduct={setProduct} productId={editingProductId} onEdit={setEditingProductId} onSave={handleSave} />
      </div>
       
    </div>
  )
}

export default Home
