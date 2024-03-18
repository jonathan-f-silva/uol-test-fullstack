package com.testuol.customers.backend.dtos;

import java.util.Map;

/**
 * A DTO representing the exception message to return.
 */
public record ExceptionDto(String errorMessage, Map<String, String> errors) {

}
