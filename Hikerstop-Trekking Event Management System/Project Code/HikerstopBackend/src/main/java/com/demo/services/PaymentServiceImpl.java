package com.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Payment;
import com.demo.dao.PaymentDao;
@Service
public class PaymentServiceImpl implements PaymentService{
	@Autowired
	PaymentDao pd;

	@Override
	public Payment save(Payment p) {
		return pd.save(p);
	}

	@Override
	public String deletepayment(int payid) {
		 pd.deleteById(payid);
		 return "delete payment" +payid;
	}
	
	
}
