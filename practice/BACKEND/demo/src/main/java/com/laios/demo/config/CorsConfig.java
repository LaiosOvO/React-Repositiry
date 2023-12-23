package com.laios.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")  // 配置允许跨域的路径
                        .allowedOrigins("http://localhost:5173")  // 允许访问的源
                        .allowedMethods("GET", "POST", "PUT", "DELETE")  // 允许的请求方法
                        .allowCredentials(true)  // 允许携带 Cookie
                        .maxAge(3600);  // 预检请求的有效期，单位为秒
            }
        };
    }
}