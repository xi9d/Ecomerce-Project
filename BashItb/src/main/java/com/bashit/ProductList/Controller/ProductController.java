package com.bashit.ProductList.Controller;


import com.bashit.ProductList.Service.ProductService;
import com.bashit.ProductList.model.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/product")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    private final ProductService productService;
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestPart("title") String title,
                                                 @RequestPart("description")String description,
                                                 @RequestPart("originalPrice")String originalPrice,
                                                 @RequestPart("discountPrice")String discountPrice,
                                                 @RequestPart("image")MultipartFile  image){
        Product product = productService.addProduct(image, title, description, originalPrice, discountPrice);
        return ResponseEntity.ok(product);
    }

    @GetMapping
    public ResponseEntity<Page<Product>> getAllProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "18") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> productPage = productService.getAllProducts(pageable);
        return ResponseEntity.ok(productPage);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id){
        Product product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }
    @GetMapping("/{title}")
    public ResponseEntity<List<Product>> getProductByTitle(@PathVariable String title){
        List<Product> product = productService.getProductByTitle(title);
        return ResponseEntity.ok(product);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProductById(@PathVariable Long id,
                                                     @RequestPart("title") String title,
                                                     @RequestPart("description")String description,
                                                     @RequestPart("originalPrice")String originalPrice,
                                                     @RequestPart("discountPrice")String discountPrice,
                                                     @RequestPart("image")MultipartFile  image){
        Product product = productService.editProduct(id,title,description,originalPrice,discountPrice,image);
        return ResponseEntity.ok(product);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> removeProduct(@PathVariable Long id){
        boolean deleted = productService.deleteProductById(id);
        Map<String, Boolean> removed = new HashMap<>();
        removed.put("Deleted",deleted);
        return ResponseEntity.ok(removed);
    }


}
