package com.bashit.ProductList.Service;

import com.bashit.ProductList.model.Product;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {


    Product addProduct(MultipartFile image, String title, String description, String originalPrice, String discountPrice);

    List<Product> getAllProducts();

    Product editProduct(Long id, String title, String description, String originalPrice, String discountPrice, MultipartFile image);

    Product getProductById(Long id);

    boolean deleteProductById(Long id);

    List<Product> getProductByTitle(String title);
}
