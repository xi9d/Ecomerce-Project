package com.bashit.ProductList.repository;

import com.bashit.ProductList.model.ProductCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<ProductCart, Long> {
}
