package com.testuol.customers.backend.controllers;

import com.testuol.customers.backend.dtos.ExceptionDto;
import jakarta.validation.ConstraintViolationException;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * Controller for the exceptions.
 */
@RestControllerAdvice
public class ExceptionController {

  @ResponseStatus(HttpStatus.NOT_FOUND)
  @ExceptionHandler(NotFoundException.class)
  public ExceptionDto handleNotFoundError(NotFoundException e) {
    return new ExceptionDto(e.getMessage(), null);
  }

  @ResponseStatus(HttpStatus.NOT_FOUND)
  @ExceptionHandler(NoSuchElementException.class)
  public ExceptionDto handleNoSuchElementError(NoSuchElementException e) {
    return new ExceptionDto(e.getMessage(), null);
  }

  /**
   * Handle validation exceptions. Adapted from:
   * https://www.baeldung.com/spring-boot-bean-validation
   *
   * @param ex The exception.
   * @return The exception message.
   */
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(ConstraintViolationException.class)
  public ExceptionDto handleValidationExceptions(ConstraintViolationException ex) {
    Map<String, String> errors = new HashMap<>();
    ex.getConstraintViolations().forEach((error) -> {
      String fieldName = error.getPropertyPath().toString();
      String errorMessage = error.getMessage();
      errors.put(fieldName, errorMessage);
    });
    return new ExceptionDto("Erro ao validar os dados", errors);
  }

  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(IllegalArgumentException.class)
  public ExceptionDto handleIllegalArgumentException(IllegalArgumentException e) {
    return new ExceptionDto(e.getMessage(), null);
  }
}
