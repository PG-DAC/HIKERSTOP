package com.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Admin;
import com.demo.dao.AdminInfoDao;
import com.demo.exception.CustomerAuthorizationExeception;
import com.demo.exception.CustomerExcpetion;
import com.demo.exception.CustomerNotFoundException;


	@Service
	public class AdminInfiImp1 implements AdminInfoService{
		@Autowired
		AdminInfoDao admindao;

		@Override
		public List<Admin> getAllUsers() {
			List<Admin> clist= admindao.findAll();
			clist.forEach((c) -> c.getUsername());
			return clist;
		}

		@Override
		public Admin save(Admin c) {
			Optional<Admin> op = admindao.findByUsername(c.getUsername());
			if(op.isPresent()) {
				throw new CustomerExcpetion("Customer Exists Excpetion");
			}
			return admindao.save(c);
		}

		@Override
		public Admin authenticateUser(String username, String password) {
			Admin admin = admindao.findByUsernamePassword(username,password)
					.orElseThrow(() -> new CustomerAuthorizationExeception("Invalid Username & Password"));
			System.out.println(admin);
			//customer.getUsername();
			//customer.getPassword();
			return admin;
			
			
		}

		@Override
		public Admin update(Admin c,String username) {
			Admin admin = admindao.findByUsername(username)
					.orElseThrow(() -> new CustomerNotFoundException("Customer Not Found"));
			if(username!=null) {
				admin.setUsername(c.getUsername());
				admin.setPassword(c.getPassword());
			
				
			}
			return admindao.save(admin);
		}


		

}
