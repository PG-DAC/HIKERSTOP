package com.demo.exception;

@SuppressWarnings("serial")
public class EventBookingFullException extends RuntimeException {

	public EventBookingFullException(String message) {
		super(message);
	}
}
