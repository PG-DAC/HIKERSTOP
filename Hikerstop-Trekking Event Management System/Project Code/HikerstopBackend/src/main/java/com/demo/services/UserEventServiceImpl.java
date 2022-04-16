package com.demo.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.beans.Event;
import com.demo.dao.UserEventDao;
import com.demo.exception.CategoryNotFoundException;

@Service
public class UserEventServiceImpl implements UserEventService{
	@Autowired
	UserEventDao userDao;
	
	@Override
	public Event fetchEvents(String eventname) {
		Event e = userDao.findByEventname(eventname);
				if(e==null)
				{
					throw new CategoryNotFoundException("Event Not Found...");
				}
				return e;
	}

	@Override
	public List<Event> getAllEvents() {
		List<Event> elist= userDao.findAll();
		elist.forEach((e) ->e.getEventname());
		return elist;
	}
}
