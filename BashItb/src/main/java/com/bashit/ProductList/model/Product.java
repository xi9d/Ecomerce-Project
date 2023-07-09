package com.bashit.ProductList.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private String originalPrice;
    private String discountPrice;
    private String category;
    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String image;
}
