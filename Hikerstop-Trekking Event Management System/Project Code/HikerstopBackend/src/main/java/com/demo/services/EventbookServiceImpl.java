package com.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Customer;
import com.demo.beans.Eventbook;
import com.demo.dao.EventbookDao;

@Service
public class EventbookServiceImpl implements EventbookService{

	@Autowired
	EventbookDao ed;

	


	@Override
	public String delete(int bookid) {
		
		 ed.deleteById(bookid);
		 return "delete booked event" +bookid;
	}




	@Override
	public Eventbook save(Eventbook e) {
		
		return ed.save(e);
	}
	
	
}
