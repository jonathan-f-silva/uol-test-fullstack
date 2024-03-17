package com.testuol.customers.backend.utils;

import com.testuol.customers.backend.dtos.CustomerCreateDto;
import com.testuol.customers.backend.entities.Customer;
import com.testuol.customers.backend.repositories.CustomerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

/**
 * Data seeder used for testing.
 */
@Profile({"dev", "staging", "test"})
@Component
public class DataSeeder {

  @Autowired
  CustomerRepository customerRepository;

  /**
   * Deletes all customers and then seeds some new ones.
   *
   * @return List of seeded customers.
   */
  public List<Customer> seedCustomers() {
    customerRepository.deleteAll();
    List<Customer> customers = List.of(
        new Customer(CustomerCreateDto.builder().name("John Doe 1").email("user1@mail.com")
            .cpf("123.456.789-01").phone("(11) 2222-3333").status("ACTIVE").build()),
        new Customer(CustomerCreateDto.builder().name("John Doe 2").email("user2@mail.com")
            .cpf("123.456.789-02").phone("(22) 2222-3333").status("INACTIVE").build()),
        new Customer(CustomerCreateDto.builder().name("John Doe 3").email("user3@mail.com")
            .cpf("123.456.789-03").phone("(33) 2222-3333").status("PENDING").build()),
        new Customer(CustomerCreateDto.builder().name("John Doe 4").email("user4@mail.com")
            .cpf("123.456.789-04").phone("(44) 2222-3333").status("DISABLED").build()));
    customerRepository.saveAll(customers);
    return customers;
  }

}
