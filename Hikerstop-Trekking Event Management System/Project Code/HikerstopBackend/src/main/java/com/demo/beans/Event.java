package com.demo.beans;


import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

@Entity
public class Event {
	@Id
	@GeneratedValue(generator="gen")
	private int eventid;
	@NotNull

	private String eventname;
	@NotNull
	private Date eventdate;
	@NotNull
	private int availabilty;
	@NotNull
	private Double price;
	
	
	
	

	public Event() {
		super();
	}


	public Event(int eventid) {
		super();
		this.eventid = eventid;
	}


	public Event(@NotNull String eventname, @NotNull Date eventdate, @NotNull int availabilty,
			@NotNull Double price) {
		super();
		this.eventname = eventname;
		this.eventdate = eventdate;
		this.availabilty = availabilty;
		this.price = price;
	}


	public int getEventid() {
		return eventid;
	}


	public void setEventid(int eventid) {
		this.eventid = eventid;
	}


	public String getEventname() {
		return eventname;
	}


	public void setEventname(String eventname) {
		this.eventname = eventname;
	}


	public Date getEventdate() {
		return eventdate;
	}


	public void setEventdate(Date eventdate) {
		this.eventdate = eventdate;
	}


	public int getAvailabilty() {
		return availabilty;
	}


	public void setAvailabilty(int availabilty) {
		this.availabilty = availabilty;
	}


	public Double getPrice() {
		return price;
	}


	public void setPrice(Double price) {
		this.price = price;
	}


	@Override
	public String toString() {
		return "Event [eventid=" + eventid + ", eventname=" + eventname + ", eventdate=" + eventdate + ", availabilty="
				+ availabilty + ", price=" + price + "]";
	}

	

	


	
}
