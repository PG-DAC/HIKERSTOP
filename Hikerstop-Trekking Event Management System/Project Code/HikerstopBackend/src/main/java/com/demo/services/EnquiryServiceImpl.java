package com.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Enquiry;
import com.demo.dao.EnquiryDao;

@Service
public class EnquiryServiceImpl implements EnquiryService{
	@Autowired
	EnquiryDao eDao;
	
	@Override
	public Enquiry save(Enquiry e) {
		return eDao.save(e);
	}

	@Override
	public Enquiry fetchEnquiry(int enquiryid) {
		return eDao.getById(enquiryid);
	}

	@Override
	public String deleteEnquiry(int enquiryid) {
		Enquiry e = eDao.getById(enquiryid);
		eDao.delete(e);
		return "Feedback "+enquiryid+" deleted";
	}

	

}
