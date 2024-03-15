package com.testuol.customers.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * Controller for the health check.
 */
@RestController
@RequestMapping("/health")
public class HealthCheckController {

  @GetMapping
  public String healthCheck() {
    return "OK";
  }
}
