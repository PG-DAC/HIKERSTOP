package com.demo.services;

import com.demo.beans.Payment;

public interface PaymentService {

	Payment save(Payment p);

	String deletepayment(int payid);

}
