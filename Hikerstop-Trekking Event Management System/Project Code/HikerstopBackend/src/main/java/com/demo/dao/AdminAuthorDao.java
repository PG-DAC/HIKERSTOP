package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.beans.Customer;


@Repository
public interface AdminAuthorDao extends JpaRepository<Customer,Integer> {

	@Query(value="select * from Customer where cname=:cname",nativeQuery=true)
	Customer findByname(String cname);

}
