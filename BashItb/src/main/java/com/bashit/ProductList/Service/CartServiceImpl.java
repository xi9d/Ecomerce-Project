package com.bashit.ProductList.Service;

import com.bashit.ProductList.model.Product;
import com.bashit.ProductList.model.ProductCart;
import com.bashit.ProductList.repository.CartRepository;
import com.bashit.ProductList.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService{
    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    @Override
    public List<ProductCart> getAllProductsInCart() {
        return cartRepository.findAll();
    }

    @Override
    public void addProductToCart(Long id) {
        Optional<Product> optionalProductCart = productRepository.findById(id);
        if (optionalProductCart.isPresent()){
            Product product = optionalProductCart.get();
            ProductCart _cart = new ProductCart();
            _cart.setProduct(product);
            cartRepository.save(_cart);
        }
    }


    @Override
    public boolean removeProduct(Long id) {
        Optional<ProductCart> optionalProductCart = cartRepository.findById(id);
        if (optionalProductCart.isPresent()){
            ProductCart cart = optionalProductCart.get();
            cartRepository.delete(cart);
            return true;
        }
        return false;
    }
}
