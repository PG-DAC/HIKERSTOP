package com.demo.exception;


@SuppressWarnings("serial")
public class EventExistsExcpetion extends RuntimeException {

	public EventExistsExcpetion(String message) {
		super(message);
	}

}