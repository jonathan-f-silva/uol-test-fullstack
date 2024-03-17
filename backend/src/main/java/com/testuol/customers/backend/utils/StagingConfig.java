package com.testuol.customers.backend.utils;

import com.testuol.customers.backend.repositories.CustomerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

/**
 * Development configuration for staging.
 */
@Profile("staging")
@Component
@Slf4j
public class StagingConfig implements ApplicationListener<ContextRefreshedEvent> {

  boolean alreadySetup = false;
  @Autowired
  private CustomerRepository customerRepository;

  @Autowired
  private DataSeeder dataSeeder;

  @Override
  public void onApplicationEvent(ContextRefreshedEvent event) {
    if (alreadySetup || customerRepository.count() > 0) {
      log.info("[STAGING] Skipping seeders");
      return;
    }
    dataSeeder.seedCustomers();
    log.info("[STAGING] Seeders have been run");
    alreadySetup = true;
  }
}
