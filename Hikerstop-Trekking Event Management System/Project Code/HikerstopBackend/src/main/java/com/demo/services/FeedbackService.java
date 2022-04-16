package com.demo.services;

import java.util.List;

import com.demo.beans.Feedback;

public interface FeedbackService {
	Feedback save(Feedback f);

	Feedback fetchFeedback(String name);

	List<Feedback> getAllCustomers();

	String deleteFeedback(String name);
}
