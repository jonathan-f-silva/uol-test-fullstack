package com.testuol.customers.backend.service;

import com.testuol.customers.backend.dtos.CustomerCreateDto;
import com.testuol.customers.backend.dtos.CustomerUpdateDto;
import com.testuol.customers.backend.entities.Customer;
import com.testuol.customers.backend.repositories.CustomerRepository;
import jakarta.transaction.Transactional;
import java.util.NoSuchElementException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service for the Customer entity.
 */
@Service
@Transactional
public class CustomerService {

  @Autowired
  private CustomerRepository customerRepository;

  /**
   * Register a new customer.
   *
   * @param customerData the customer data to register
   * @return the registered customer
   */
  public Customer register(CustomerCreateDto customerData) {
    Customer newCustomer = new Customer(customerData);
    return customerRepository.save(newCustomer);
  }

  /**
   * Get all customers.
   *
   * @return all customers
   */
  public Iterable<Customer> getAllCustomers() {
    return customerRepository.findAll();
  }

  /**
   * Get a customer by id.
   *
   * @param customerId the id of the customer, must not be null
   * @return the customer
   * @throws IllegalArgumentException if the customer id is null
   * @throws NoSuchElementException if the customer is not found
   */
  public Customer getCustomerById(Integer customerId)
      throws IllegalArgumentException, NoSuchElementException {
    if (customerId == null) {
      throw new IllegalArgumentException("Customer id is required");
    }
    return customerRepository.findById(customerId).orElseThrow();
  }

  /**
   * Update a customer.
   *
   * @param customer the customer to update
   * @return the updated customer
   * @throws IllegalArgumentException if the customer id is null
   * @throws NoSuchElementException if the customer is not found
   */
  public Customer updateCustomer(Integer customerId, CustomerUpdateDto customer)
      throws IllegalArgumentException, NoSuchElementException {
    if (customerId == null) {
      throw new IllegalArgumentException("Customer id is required");
    }
    Customer updatedCustomer = customerRepository.findById(customerId).orElseThrow();
    updatedCustomer.setName(customer.getName());
    updatedCustomer.setEmail(customer.getEmail());
    updatedCustomer.setPhone(customer.getPhone());
    updatedCustomer.setCpf(customer.getCpf());
    updatedCustomer.setStatus(customer.getStatus());
    return customerRepository.save(updatedCustomer);
  }
}
