import axios from 'axios';


const PRODUCT_IN_CART_API_BASE_URL = "http://localhost:8080/api/v1/cart";   
class CartService{
    static getAllProductsInCart(){
        return axios.get(PRODUCT_IN_CART_API_BASE_URL);
      };
    static addProductToCart(id){
        return axios.post(PRODUCT_IN_CART_API_BASE_URL+"/"+id);
    };
    static deleteProductFromCart(id){
        return axios.delete(PRODUCT_IN_CART_API_BASE_URL+"/"+id);
    };
      
}

export default CartService;