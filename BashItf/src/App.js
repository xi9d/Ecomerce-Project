import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Main from "./pages/Main";
import Navbar from "./Components/Navbar";
import SignUp from "./pages/SignUp";
import ViewProduct from "./pages/ViewProduct";
import Login from "./pages/Login";
import Category from "./pages/Category";
import AddProduct from "./pages/AddProduct";
import ShoppingCart from "./pages/ShoppingCart";



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Main/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/index" element={<Main/>}/>
      <Route path="/account" element={<SignUp/>}/>
      <Route path="/viewproduct/:id" element={<ViewProduct />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/addProduct" element={<AddProduct/>}/>
      <Route path="/cart" element={<ShoppingCart/>}/>
      <Route path="*" element={<h1 className="max-w-full mx-auto max-y-full my-auto px-6 py-6 text-lg text-red-500">Not Found </h1>}/>
      
    </Routes>
   <Footer/>
   </BrowserRouter>
</>
  );
}

export default App;
