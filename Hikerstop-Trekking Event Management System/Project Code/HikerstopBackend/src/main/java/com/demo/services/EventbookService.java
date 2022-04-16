package com.demo.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.demo.beans.Customer;
import com.demo.beans.Eventbook;

public interface EventbookService {



	String delete(int bookid);

	Eventbook save(Eventbook e);

	
	

}
