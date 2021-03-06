package com.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.beans.Admin;





	@Repository
	public interface AdminInfoDao extends JpaRepository<Admin,Integer>{
		
		Optional<Admin> findByUsername(String username);

		@Query(value="select * from admin where username=:username and password=:password",nativeQuery=true)
		Optional<Admin> findByUsernamePassword(String username, String password);

}
