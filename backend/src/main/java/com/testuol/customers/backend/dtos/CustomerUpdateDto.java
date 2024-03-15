package com.testuol.customers.backend.dtos;

/**
 * A DTO representing the customer info to update.
 */
public record CustomerUpdateDto(Integer id, String name, String email, String phone, String cpf,
    String status) {
}
