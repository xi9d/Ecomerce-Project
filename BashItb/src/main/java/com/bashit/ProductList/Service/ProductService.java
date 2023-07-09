package com.bashit.ProductList.Service;

import com.bashit.ProductList.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {


    Product addProduct(MultipartFile image, String title, String description, String originalPrice, String discountPrice);

    Page<Product> getAllProducts(Pageable pageable);

    Product editProduct(Long id, String title, String description, String originalPrice, String discountPrice, MultipartFile image);

    Product getProductById(Long id);

    boolean deleteProductById(Long id);

    List<Product> getProductByTitle(String title);
}
