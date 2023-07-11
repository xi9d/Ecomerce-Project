package com.bashit.ProductList.Controller;

import com.bashit.ProductList.Service.CartService;
import com.bashit.ProductList.model.ProductCart;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {
    private final CartService cartService;
    @GetMapping
    public ResponseEntity<List<ProductCart>> getAllProductsInCart(){
        return ResponseEntity.ok(cartService.getAllProductsInCart());
    }
    @PostMapping("/{id}")
    public ResponseEntity<HttpStatus> addProductToCart(@PathVariable Long id){
        cartService.addProductToCart(id);
        return ResponseEntity.ok(HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> removeProductFromCart(@PathVariable Long id){
        boolean delete = cartService.removeProduct(id);
        Map<String,Boolean> results = new HashMap<>();
        results.put("Deleted",delete);
        return ResponseEntity.ok(results);
    }

}
