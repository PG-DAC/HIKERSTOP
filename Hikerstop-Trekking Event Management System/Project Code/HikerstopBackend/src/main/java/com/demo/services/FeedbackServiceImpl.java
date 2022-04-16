package com.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.demo.beans.Feedback;
import com.demo.dao.FeedbackDao;


@Service
public class FeedbackServiceImpl implements FeedbackService {
	@Autowired
	FeedbackDao fDao;

	@Override
	public Feedback save(Feedback f) {
		return fDao.save(f);
	}

	@Override
	public Feedback fetchFeedback(String name) {
		Feedback e = fDao.findByName(name);
		return e;
	}

	@Override
	public List<Feedback> getAllCustomers() {
		List<Feedback> elist= fDao.findAll();
		elist.forEach((e) ->e.getName());
		return elist;
	}


	@Override
	public String deleteFeedback(String name) {
		Feedback e = fDao.findByName(name);
				fDao.delete(e);
				return "Feedback "+name+" deleted";
	}
	

}
