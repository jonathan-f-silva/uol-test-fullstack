package com.testuol.customers.backend.controllers;

import com.testuol.customers.backend.dtos.CustomerCreateDto;
import com.testuol.customers.backend.dtos.CustomerResponseDto;
import com.testuol.customers.backend.dtos.CustomerUpdateDto;
import com.testuol.customers.backend.entities.Customer;
import com.testuol.customers.backend.service.CustomerService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for customer operations.
 */
@RestController
@RequestMapping("/customer")
public class CustomerController {
  @Autowired
  CustomerService customerService;

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public CustomerResponseDto registerCustomer(@RequestBody CustomerCreateDto newCustomerData) {
    return new CustomerResponseDto(customerService.register(newCustomerData));
  }

  @PutMapping("/{customerId}")
  public CustomerResponseDto updateCustomer(@PathVariable Integer customerId,
      @RequestBody CustomerUpdateDto updatedCustomerData) {
    return new CustomerResponseDto(customerService.updateCustomer(customerId, updatedCustomerData));
  }

  @GetMapping("/{customerId}")
  public CustomerResponseDto getCustomer(@PathVariable Integer customerId) {
    return new CustomerResponseDto(customerService.getCustomerById(customerId));
  }

  /**
   * Get all customers.
   *
   * @return A list of all customers.
   */
  @GetMapping
  public List<CustomerResponseDto> getCustomers() {
    List<CustomerResponseDto> customers = new ArrayList<>();
    for (Customer customer : customerService.getAllCustomers()) {
      customers.add(new CustomerResponseDto(customer));
    }
    return customers;
  }
}
