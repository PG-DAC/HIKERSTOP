package com.demo.dao;

import org.springframework.data.repository.CrudRepository;

import com.demo.beans.Bookevent;
	public interface BookeventDao extends CrudRepository<Bookevent, Integer>
	{
		
	}

