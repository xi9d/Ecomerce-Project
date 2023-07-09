import axios from 'axios';


const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/product";   
class ProductsService{
    static getAllProducts(page) {
        return axios.get(PRODUCT_API_BASE_URL, {
          params: { page },
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      };
      static getAllProductsByCategory(page, category) {
        return axios.get(`${PRODUCT_API_BASE_URL}/${category}`, {
          params: { page },
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      
    static getProductById(id){
        return axios.get(
            PRODUCT_API_BASE_URL +"/"+id
        );
    };
    static addProduct(product){
        return axios.post(
            PRODUCT_API_BASE_URL, product, {
                headers:{
                    'Content-Type':'multipart/form-data',
                },
            }
        );
    };
    static updateProduct(product){
        return axios.put(
            PRODUCT_API_BASE_URL +"/"+ product.id, product
        );
    };
    static deleteProduct(id){
        return axios.delete(id);
    };
}

export default ProductsService