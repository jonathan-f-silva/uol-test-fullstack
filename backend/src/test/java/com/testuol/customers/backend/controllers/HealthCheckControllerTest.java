package com.testuol.customers.backend.controllers;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

/**
 * Test for the health check controller.
 */
@SpringBootTest
@AutoConfigureMockMvc
public class HealthCheckControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @Test
  void healthCheck_returns_Ok() throws Exception {
    mockMvc.perform(MockMvcRequestBuilders.get("/health"))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.content().string("OK"));
  }
}
