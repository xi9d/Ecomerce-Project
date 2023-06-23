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
      originalPrice:"",
      discountPrice:"",
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

        <label for="title">Title</label>
        <input type="text" id="fname" name="title" value={product.title} 
        className='border h-10 px-2  text-lg w-full'
        onChange={(e) =>handleChange(e)}/><br/>

        <label for="desc">Description</label>
        <textarea id="desc" className='border h-32 px-2  text-lg w-full' name='description' value={product.description}
        onChange={(e) =>handleChange(e)}/><br/>

        <label for="price"> Original Price</label>
        <input type='text' className='border h-10 px-2  text-lg w-full'
         name='originalPrice' value={product.originalPrice}
         onChange={(e) =>handleChange(e)}/>

        <label for="price"> Discount Price</label>
        <input type='text' className='border h-10 px-2  text-lg w-full'
         name='discountPrice' value={product.discountPrice}
         onChange={(e) =>handleChange(e)}/>
        <label for="pic">Picture:</label>
        <input type="file" id="pic" name="image" accept='image/*'
         className='border h-10 px-2  text-lg w-full'
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