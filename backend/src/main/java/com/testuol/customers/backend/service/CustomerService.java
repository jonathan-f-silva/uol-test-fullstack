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
    if (!isUnique("email", newCustomer.getEmail())) {
      throw new IllegalArgumentException("Email já cadastrado");
    } else if (!isUnique("cpf", newCustomer.getCpf())) {
      throw new IllegalArgumentException("CPF já cadastrado");
    }
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
   * @param customerUpdate the customer to update
   * @return the updated customer
   * @throws IllegalArgumentException if the customer id is null
   * @throws NoSuchElementException if the customer is not found
   */
  public Customer updateCustomer(Integer customerId, CustomerUpdateDto customerUpdate)
      throws IllegalArgumentException, NoSuchElementException {
    if (customerId == null) {
      throw new IllegalArgumentException("ID do Cliente é obrigatório");
    }
    Customer customer = customerRepository.findById(customerId).orElseThrow();
    if (!customer.getEmail().equals(customerUpdate.getEmail())
        && !isUnique("email", customerUpdate.getEmail())) {
      throw new IllegalArgumentException("Email já cadastrado");
    } else if (!customer.getCpf().equals(customerUpdate.getCpf())
        && !isUnique("cpf", customerUpdate.getCpf())) {
      throw new IllegalArgumentException("CPF já cadastrado");
    }
    customer.setName(customerUpdate.getName());
    customer.setEmail(customerUpdate.getEmail());
    customer.setPhone(customerUpdate.getPhone());
    customer.setCpf(customerUpdate.getCpf());
    customer.setStatus(customerUpdate.getStatus());
    return customerRepository.save(customer);
  }

  /**
   * Check if a field value is unique (not already in use).
   *
   * @param fieldName the field name
   * @param fieldValue the field value
   * @return true if the field value is unique, false otherwise
   */
  public boolean isUnique(String fieldName, String fieldValue) {
    if (fieldName.equals("email")) {
      return customerRepository.findByEmail(fieldValue).isEmpty();
    } else if (fieldName.equals("cpf")) {
      return customerRepository.findByCpf(fieldValue).isEmpty();
    }
    return false;
  }
}
