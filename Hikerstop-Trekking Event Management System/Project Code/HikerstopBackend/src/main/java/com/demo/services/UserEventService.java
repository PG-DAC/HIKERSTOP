package com.demo.services;

import java.util.List;

import com.demo.beans.Event;

public interface UserEventService  {

	Event fetchEvents(String eventname);

	List<Event> getAllEvents();



}
