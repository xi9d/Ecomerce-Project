import axios from 'axios';
import Cookies from 'js-cookie';

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/product";

class ProductsService {
  static getAllProducts(page) {
    const authToken = getAuthToken();
    return axios.get(PRODUCT_API_BASE_URL, {
      params: { page },
      headers: {
        'Content-Type': 'application/octet-stream',
        withCredentials: true,
        Authorization: `Bearer ${authToken}`,
      },
    });
  }

  static getAllProductsByCategory(category) {
    const authToken = getAuthToken();
    return axios.get(PRODUCT_API_BASE_URL + "/category/" + category, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        withCredentials: true,
      },
    });
  }

  static getProductById(id) {
    const authToken = getAuthToken();
    return axios.get(PRODUCT_API_BASE_URL + "/" + id, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        withCredentials: true,
      },
    });
  }

  static addProduct(product) {
    const authToken = getAuthToken();
    return axios.post(PRODUCT_API_BASE_URL, product, {
      headers: {
        'Content-Type': 'application/octet-stream',
        Authorization: `Bearer ${authToken}`,
        withCredentials: true,
      },
    });
  }

  static updateProduct(product) {
    const authToken = getAuthToken();
    return axios.put(PRODUCT_API_BASE_URL + "/" + product.id, product, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        withCredentials: true,
      },
    });
  }

  static deleteProduct(id) {
    const authToken = getAuthToken();
    return axios.delete(id, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        withCredentials: true,
      },
    });
  }
}

function getAuthToken() {
  const authToken = Cookies.get('token'); // Get token from cookie
  console.log("The auth token is " + authToken);
  return authToken;
}

export default ProductsService;
