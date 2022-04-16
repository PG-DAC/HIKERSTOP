package com.demo.services;

import java.util.List;

import com.demo.beans.Customer;

public interface AdminAuthorService {

	Customer fetchCustomers(String cname);

	List<Customer> getAllCustomers();

	String deletebyCustomerId(int a_id);

}
