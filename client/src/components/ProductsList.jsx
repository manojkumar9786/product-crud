import React, { useEffect, useState } from 'react'
import { LuChevronsUpDown } from "react-icons/lu";

const ProductsList = ({setOpenForm, onEdit}) => {

   const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/products')
        .then((response) => response.json())
        .then((data) => setProducts(data));
    })
        const handleDelete= (id)=>{
            fetch(`http://localhost:8000/product/${id}`,{
                method: 'Delete'
            })
            .then(()=>{
                setProducts((prev) => prev.filter((product) => product._id !== id));
            })
        }

        const handleEdit = (id)=>{
            setOpenForm((prevState)=> !prevState)
            onEdit(id)
        }
   
  return (
    <div className="container mx-auto">
          <table className="min-w-full bg-white border border-l-0 border-r-0 border-gray-200 rounded-lg">
            <thead>
              <tr className="w-full text-gray-700 border-b text-left">
                <th className="py-2 px-4 border-r">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <p className="text-[14px] font-normal">Product Name</p>
                    </div>
                    <LuChevronsUpDown className="text-[#92929D]" />
                  </div>
                </th>
                <th className="py-2 px-4 border-r">
                  <div className="flex items-center gap-5">
                    <p className="text-sm font-normal">Price</p>
                    <LuChevronsUpDown className="text-[#92929D]" />
                  </div>
                </th>
                <th className="py-2 px-4 border-r">
                  <div className="flex items-center gap-5">
                    <p className="text-sm font-normal">Old Price</p>
                    <LuChevronsUpDown className="text-[#92929D]" />
                  </div>
                </th>
                <th className="py-2 px-4 border-r">
                  <div className="flex items-center gap-5">
                    <p className="text-sm font-normal">Category</p>
                    <LuChevronsUpDown className="text-[#92929D]" />
                  </div>
                </th>
                <th className="py-2 px-4 border-r">
                  <div className="flex items-center gap-5">
                    <p className="text-sm font-normal">Status</p>
                    <LuChevronsUpDown className="text-[#92929D]" />
                  </div>
                </th>
                <th className="py-2 px-4 border-r">
                  <div className="flex items-center gap-5">
                    <p className="text-sm font-normal">Description</p>
                    <LuChevronsUpDown className="text-[#92929D]" />
                  </div>
                </th>
                <th className="py-2 px-4 border-r">
                  <div className="flex items-center gap-5">
                    <p className="text-sm font-normal">Actions</p>
                    <LuChevronsUpDown className="text-[#92929D]" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((row, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-4 px-4 flex items-center text-sm">
                    {row.productName}
                  </td>
                  <td
                    className={`py-4 px-4 text-[12px]`}
                  >
                    <div className="flex items-center text-xs">
                      <p>{row.price}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-[14px] text-[#737373]">{row.oldPrice}</td>
                  <td className="py-4 px-4 text-[14px] text-[#737373]">{row.category}</td>
                  <td className="py-4 px-4 text-[14px] text-[#737373]">{row.isActive ? 'Active' : 'InActive'}</td>
                  <td className="py-4 px-4 text-[14px] text-[#737373]">
                    <div className="flex items-center ml-1 gap-4 text-xs">
                      <p>{row.description}</p>
                    </div>
                  </td>
                  <td className='py-4 px-4 text-[14px] text-[#737373] flex space-x-5'>
                    <button className='btn bg-green-500 px-2 py-1 text-white rounded-lg' onClick={()=> handleEdit(row._id)}>Edit</button>
                    <button className='btn bg-red-600 py-1 px-2 text-white rounded-lg' onClick={()=> handleDelete(row._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}

export default ProductsList
