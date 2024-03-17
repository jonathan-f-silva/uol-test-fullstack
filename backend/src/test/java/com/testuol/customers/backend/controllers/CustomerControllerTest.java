package com.testuol.customers.backend.controllers;

import com.testuol.customers.backend.entities.Customer;
import com.testuol.customers.backend.utils.DataSeeder;
import java.util.List;
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
  private DataSeeder dataSeeder;

  private List<Customer> customers;

  @BeforeEach
  private void seedData() {
    customers = dataSeeder.seedCustomers();
  }

  @Test
  void getAllCustomers_returns_customers() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/customers"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].name").value(customers.get(0).getName()))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].email").value(customers.get(0).getEmail()))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].cpf").value(customers.get(0).getCpf()))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].phone").value(customers.get(0).getPhone()))
        .andExpect(
            MockMvcResultMatchers.jsonPath("$[0].status").value(customers.get(0).getStatus()))
        .andExpect(MockMvcResultMatchers.jsonPath("$[1].name").value(customers.get(1).getName()))
        .andExpect(MockMvcResultMatchers.jsonPath("$[2].name").value(customers.get(2).getName()))
        .andExpect(MockMvcResultMatchers.jsonPath("$[3].name").value(customers.get(3).getName()));
  }

  @Test
  void getCustomer_returns_a_customer() throws Exception {
    Customer customer = customers.get(0);
    mockMvc.perform(MockMvcRequestBuilders.get("/customers/1"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.name").value(customer.getName()))
        .andExpect(MockMvcResultMatchers.jsonPath("$.email").value(customer.getEmail()))
        .andExpect(MockMvcResultMatchers.jsonPath("$.cpf").value(customer.getCpf()))
        .andExpect(MockMvcResultMatchers.jsonPath("$.phone").value(customer.getPhone()))
        .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(customer.getStatus()));
  }

  @Test
  void registerCustomer_returns_the_created_customer() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.post("/customers").contentType("application/json")
        .content("{\"name\":\"New User\",\"email\":\"newuser@mail.com"
            + "\",\"cpf\":\"123.456.789-99\",\"phone\":\"(99) 2222-3333\",\"status\":\"ACTIVE\"}"))
        .andExpect(MockMvcResultMatchers.status().isCreated())
        .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(5))
        .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("New User"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("newuser@mail.com"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.cpf").value("123.456.789-99"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.phone").value("(99) 2222-3333"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("ACTIVE"));

    mockMvc.perform(MockMvcRequestBuilders.get("/customers/5"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("New User"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("newuser@mail.com"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.cpf").value("123.456.789-99"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.phone").value("(99) 2222-3333"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("ACTIVE"));
  }

  @Test
  void updateCustomer_returns_the_updated_customer() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.put("/customers/1").contentType("application/json")
        .content("{\"name\":\"Updated User\",\"email\":\"updateduser@mail.com"
            + "\",\"cpf\":\"123.456.789-88\",\"phone\":\"(88) 2222-3333\",\"status\":\"ACTIVE\"}"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Updated User"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("updateduser@mail.com"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.cpf").value("123.456.789-88"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.phone").value("(88) 2222-3333"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("ACTIVE"));

    mockMvc.perform(MockMvcRequestBuilders.get("/customers/1"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Updated User"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("updateduser@mail.com"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.cpf").value("123.456.789-88"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.phone").value("(88) 2222-3333"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.status").value("ACTIVE"));
  }
}
