package com.demo.services;

import com.demo.beans.Enquiry;


public interface EnquiryService {

	Enquiry save(Enquiry e);

	Enquiry fetchEnquiry(int enquiryid);

	String deleteEnquiry(int enquiryid);


}
