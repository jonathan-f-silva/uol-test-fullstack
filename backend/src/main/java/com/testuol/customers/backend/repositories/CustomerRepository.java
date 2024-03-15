package com.testuol.customers.backend.repositories;

import com.testuol.customers.backend.entities.Customer;
import org.springframework.data.repository.CrudRepository;

/**
 * Repository for Customer entity.
 */
public interface CustomerRepository extends CrudRepository<Customer, Integer> {
}
