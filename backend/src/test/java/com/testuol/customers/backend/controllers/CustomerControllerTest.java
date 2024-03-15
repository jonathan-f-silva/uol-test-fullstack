package com.testuol.customers.backend.controllers;

import com.testuol.customers.backend.dtos.CustomerCreateDto;
import com.testuol.customers.backend.entities.Customer;
import com.testuol.customers.backend.repositories.CustomerRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

/**
 * Tests for the customer controller.
 */
@SpringBootTest
@AutoConfigureMockMvc
public class CustomerControllerTest {
  @Autowired
  private MockMvc mockMvc;

  @Autowired
  private CustomerRepository customerRepository;

  @BeforeEach
  private void seedData() {
    customerRepository.deleteAll();
    Customer customer1 =
        new Customer(CustomerCreateDto.builder().name("user1").email("user1@mail.com")
            .cpf("123.456.789-01").phone("11922223333").status("ACTIVE").build());
    Customer customer2 =
        new Customer(CustomerCreateDto.builder().name("user2").email("user2@mail.com")
            .cpf("123.456.789-02").phone("44922223333").status("ACTIVE").build());
    customerRepository.save(customer1);
    customerRepository.save(customer2);
  }

  @Test
  void getAllCustomers_returns_customers() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/customer"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].name").value("user1"))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].email").value("user1@mail.com"))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].cpf").value("123.456.789-01"))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].phone").value("11922223333"))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].status").value("ACTIVE"));
  }

  @Test
  void getCustomer_returns_a_customer() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/customer/1"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("user1"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("user1@mail.com"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.cpf").value("123.456.789-01"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.phone").value("11922223333"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("ACTIVE"));
  }

  @Test
  void registerCustomer_returns_the_created_customer() throws Exception {
    mockMvc
        .perform(MockMvcRequestBuilders.post("/customer").contentType("application/json")
            .content("{\"name\":\"user3\",\"email\":\"user3@mail.com"
                + "\",\"cpf\":\"123.456.789-03\",\"phone\":\"11922223333\",\"status\":\"ACTIVE\"}"))
        .andExpect(MockMvcResultMatchers.status().isCreated())
        .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("user3"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("user3@mail.com"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.cpf").value("123.456.789-03"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.phone").value("11922223333"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("ACTIVE"));
  }

  @Test
  void updateCustomer_returns_the_updated_customer() throws Exception {
    mockMvc
        .perform(MockMvcRequestBuilders.put("/customer/1").contentType("application/json")
            .content("{\"name\":\"user1\",\"email\":\"user1@mail.com"
                + "\",\"cpf\":\"123.456.789-01\",\"phone\":\"22922223333\",\"status\":\"ACTIVE\"}"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("user1"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("user1@mail.com"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.cpf").value("123.456.789-01"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.phone").value("22922223333"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("ACTIVE"));
  }
}
