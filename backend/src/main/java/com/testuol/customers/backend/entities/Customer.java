package com.testuol.customers.backend.entities;

import com.testuol.customers.backend.dtos.CustomerCreateDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

/**
 * Customer entity.
 */
@Data
@Entity
@Table(name = "customers")
public class Customer {
  public Customer() {}

  /**
   * Constructor for creating a new customer.
   *
   * @param newCustomerData The data for the new customer.
   */
  public Customer(CustomerCreateDto newCustomerData) {
    this.name = newCustomerData.name();
    this.email = newCustomerData.email();
    this.cpf = newCustomerData.cpf();
    this.phone = newCustomerData.phone();
    this.status = newCustomerData.status();
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column(nullable = false)
  private String name;

  @Column(unique = true, nullable = false)
  private String email;

  @Column(unique = true, nullable = false)
  private String cpf;

  @Column(nullable = false)
  private String phone;

  @Column(nullable = false)
  private String status;
}
