package com.bashit.ProductList.Service;

import com.bashit.ProductList.model.Product;
import com.bashit.ProductList.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService{
    private final ProductRepository productRepository;

    @Override
    public Product addProduct(MultipartFile image,
                              String title,
                              String description,
                              String originalPrice,
                              String discountPrice) {
        Product product = new Product();
        String fileName = StringUtils.cleanPath(image.getOriginalFilename());
        if(fileName.contains(".."))
        {
            System.out.println("not a a valid file");
        }
        try {
            product.setImage(Base64.getEncoder().encodeToString(image.getBytes()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        product.setTitle(title);
        product.setDescription(description);
        product.setOriginalPrice(originalPrice);
        product.setDiscountPrice(discountPrice);
        productRepository.save(product);
        return product;
    }

    @Override
    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public Product editProduct(Long id,
                               String title,
                               String description,
                               String originalPrice,
                               String discountPrice,
                               MultipartFile image)  {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()){
            Product product = optionalProduct.get();
            product.setTitle(title);
            product.setDescription(description);
            product.setOriginalPrice(originalPrice);
            product.setDiscountPrice(discountPrice);
            try {
                product.setImage(Base64.getEncoder().encodeToString(image.getBytes()));
            } catch (IOException e) {
                e.printStackTrace();
            }
            productRepository.save(product);
        }
        return null;
    }

    @Override
    public Product getProductById(Long id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()){
            Product product = optionalProduct.get();
            return product;
        }
        return null;
    }

    @Override
    public boolean deleteProductById(Long id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()){
            productRepository.delete(optionalProduct.get());
            return true;
        }
        return false;
    }

    @Override
    public List<Product> getProductByTitle(String title) {
        Optional<Product> optionalProduct = productRepository.findAllByTitle(title);
        if (optionalProduct.isPresent()){
            List<Product> products = (List<Product>) optionalProduct.get();
            return products;
        }
        return null;
    }
}
