package com.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.beans.Bookevent;
import com.demo.beans.Event;

@Repository
public interface AdminDao extends CrudRepository<Event,Integer> {
	
	

}
//	@Query(value="select * from Event where eventid=:eventid",nativeQuery=true)
//	Event findByEventId(int eventid);

//	@Query(value="select * from Event where eventid=:eventid",nativeQuery=true)
//	Optional<Event> findByEventId(int eventid);
//	
//	@Query(value="select * from Event ",nativeQuery=true)
//	List<Event> findAll();
//	
//	@Query(value="delete from Event where eventid:=eventid ",nativeQuery=true)
//	Event deletebyId(int eventid);
//}
