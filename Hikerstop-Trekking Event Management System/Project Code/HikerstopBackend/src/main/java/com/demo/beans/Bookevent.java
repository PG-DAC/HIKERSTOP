package com.demo.beans;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
//mark class as an Entity 
@Entity
//defining class name as Table name
@Table
public class Bookevent {
	
		//Defining book id as primary key
		@Id
		@Column
		@GeneratedValue(generator="gen")
		private int bookid;
		@Column
		private String trekkersname;
		@Column
		private Date bookdate;
		@Column
	
		private String eventname;
		@Column
		private int noofperson;
		public int getBookid() {
			return bookid;
		}
		public void setBookid(int bookid) {
			this.bookid = bookid;
		}
		public String getTrekkersname() {
			return trekkersname;
		}
		public void setTrekkersname(String trekkersname) {
			this.trekkersname = trekkersname;
		}
		public Date getBookdate() {
			return bookdate;
		}
		public void setBookdate(Date bookdate) {
			this.bookdate = bookdate;
		}
		public String getEventname() {
			return eventname;
		}
		public void setEventname(String eventname) {
			this.eventname = eventname;
		}
		public int getNoofperson() {
			return noofperson;
		}
		public void setNoofperson(int noofperson) {
			this.noofperson = noofperson;
		}
		@Override
		public String toString() {
			return "Bookevent [bookid=" + bookid + ", trekkersname=" + trekkersname + ", bookdate=" + bookdate
					+ ", eventname=" + eventname + ", noofperson=" + noofperson + "]";
		}
		
	
		}

