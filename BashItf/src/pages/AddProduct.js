import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductsService from '../Services/ProductsService';

function AddProduct() {
  const [product, setProduct] = useState(
    {
      id:"",
      title:"",
      description:"",
      originalPrice:null,
      discountPrice:null,
      category:"",
      image:null
    }
  );
  const handleChange = (e) => {
    const value = e.target.value;
    
    if (e.target.name === 'image') {
      setProduct({ ...product, [e.target.name]: e.target.files[0] }); // Assign the file object to the image property
    }else{
    setProduct({...product,[e.target.name]: value});
    }
  };

  const navigate = useNavigate();

  const saveProducts = (e) =>{
   e.preventDefault();
    const formData = new FormData();
    formData.append('title', product.title);
    formData.append('description', product.description);
    formData.append('originalPrice', product.originalPrice);
    formData.append('discountPrice', product.discountPrice);
    formData.append('category', product.category);
    formData.append('image', product.image);
    ProductsService.addProduct(formData).then((response) => {
      console.log(response);
      navigate("/index");
    }
    );
}

  return (
    <>
    <div className='max-w-2xl mx-auto border m-10 px-4 py-4 text-center'>
    <h1 className='p-5 font-bold capitalize text-slate-600 text-lg'>Add Product</h1>
    <form method='post' className='text-left px-4 py-4 font-semibold text-slate-600 capitalize'>

        <label htmlFor="fname">Title</label>
        <input type="text" id="fname" name="title" value={product.title} 
        className='border h-10 px-2  text-lg w-full'
        onChange={(e) =>handleChange(e)}/><br/>

        <label htmlFor="desc">Description</label>
        <textarea id="desc" className='border h-32 px-2  text-lg w-full' name='description' value={product.description}
        onChange={(e) =>handleChange(e)}/><br/>

        <label htmlFor="price1"> Original Price</label>
        <input type='number' id='price1' className='border h-10 px-2  text-lg w-full'
         name='originalPrice' value={product.originalPrice}
         onChange={(e) =>handleChange(e)}/>

        <label htmlFor="price"> Discount Price</label>
        <input type='number'id='price2' className='border h-10 px-2  text-lg w-full'
         name='discountPrice' value={product.discountPrice}
         onChange={(e) =>handleChange(e)}/>

      <label htmlFor="my-dropdown">Select an category</label><br/>
      <select id="my-dropdown" name='category' value={product.category} onChange={(e) => handleChange(e)}
      className='px-5 py-4 border bg-slate-100 capitalize'>
        <option value="">categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Home Appliances">Home applicances</option>
        <option value="Furniture">Furniture</option>
        <option value="Beauty and Personal Care">Beauty and Personal Care</option>
        <option value="Sports and Fitness">Sports and Fitness</option>
        <option value="Books and Stationery">Books and Stationery</option>
        <option value="Toys and Games">Toys and Games</option>
        <option value="Health and Wellness">Health and Wellness</option>
        <option value="Grocery">Grocery</option>
        <option value="Others">Others</option>
      </select>
      <br/>

        <label htmlFor="pic">Picture:</label>
        <input type="file" id="pic" name="image" accept='image/*'
         className='border h-15 px-2 py-1 text-lg w-full'
         onChange={(e) =>handleChange(e)}/><br/>
        


        <button type="submit" 
        className='px-4 py-4 mx-auto my-5  font-bold text-white rounded-md w-full bg-orange-700'
        onClick={(e) =>saveProducts(e)}>Submit</button>
    </form>
    </div>
    
    </>
  )
}

export default AddProduct