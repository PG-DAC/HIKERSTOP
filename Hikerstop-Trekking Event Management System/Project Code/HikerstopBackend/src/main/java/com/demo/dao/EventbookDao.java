package com.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.beans.Customer;
import com.demo.beans.Eventbook;
@Repository
public interface EventbookDao extends JpaRepository<Eventbook,Integer>{

	
//	@Query(value="select * from eventbook e join customer c where e.customer=:c_id",nativeQuery=true)
//	Optional<Eventbook> findByCustomerId(int c_id);

	

	@Query(value="select * from eventbook where bookid=:bookid",nativeQuery=true)
	Eventbook findById(int bookid);



}
