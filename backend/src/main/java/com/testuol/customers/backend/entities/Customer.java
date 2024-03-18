package com.testuol.customers.backend.entities;

import com.testuol.customers.backend.dtos.CustomerCreateDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
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
    this.name = newCustomerData.getName();
    this.email = newCustomerData.getEmail();
    this.cpf = newCustomerData.getCpf();
    this.phone = newCustomerData.getPhone();
    this.status = newCustomerData.getStatus();
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @NotBlank(message = "Nome é obrigatório")
  @Column(nullable = false)
  private String name;

  @NotBlank(message = "Email é obrigatório")
  @Email(message = "Email inválido")
  @Column(unique = true, nullable = false)
  private String email;

  @NotBlank(message = "CPF é obrigatório")
  @Pattern(regexp = "^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$",
      message = "CPF inválido. Formato esperado: 000.000.000-00")
  @Column(unique = true, nullable = false)
  private String cpf;

  @NotBlank(message = "Telefone é obrigatório")
  @Column(nullable = false)
  private String phone;

  @NotBlank(message = "Status é obrigatório")
  @Column(nullable = false)
  private String status;
}
