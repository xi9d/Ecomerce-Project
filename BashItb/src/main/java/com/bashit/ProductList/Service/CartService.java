package com.bashit.ProductList.Service;

import com.bashit.ProductList.model.ProductCart;

import java.util.List;

public interface CartService {
    List<ProductCart> getAllProductsInCart();
    void addProductToCart(Long id);

    boolean removeProduct(Long id);
}
