package com.testuol.customers.backend.repositories;

import com.testuol.customers.backend.entities.Customer;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

/**
 * Repository for Customer entity.
 */
public interface CustomerRepository extends CrudRepository<Customer, Integer> {

  Optional<Customer> findByEmail(String email);

  Optional<Customer> findByCpf(String fieldValue);
}
