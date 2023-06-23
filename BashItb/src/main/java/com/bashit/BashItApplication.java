package com.bashit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
public class BashItApplication {

    public static void main(String[] args) {
        SpringApplication.run(BashItApplication.class, args);
    }

}
