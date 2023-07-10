package com.bashit.ProductList.model;

import jakarta.persistence.*;
import lombok.Data;

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
    private double save;
    private String category;
    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String image;



    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", originalPrice='" + originalPrice + '\'' +
                ", discountPrice='" + discountPrice + '\'' +
                ", category='" + category + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
