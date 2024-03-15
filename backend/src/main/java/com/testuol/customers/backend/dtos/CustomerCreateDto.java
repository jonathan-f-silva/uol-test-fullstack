package com.testuol.customers.backend.dtos;

/**
 * A data transfer object representing the information needed to create a new customer.
 */
public record CustomerCreateDto(String name, String email, String phone, String cpf,
    String status) {
}
