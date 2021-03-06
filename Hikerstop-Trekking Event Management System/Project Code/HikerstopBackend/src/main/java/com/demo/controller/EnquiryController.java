package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Enquiry;
import com.demo.dto.ResponseDTO;
import com.demo.services.EnquiryService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/enquiry")
public class EnquiryController {
	
	@Autowired
	EnquiryService eService;
	
	@PostMapping
	public ResponseEntity<?> addEnquiry(@RequestBody Enquiry e) {
		return new ResponseEntity<>(new ResponseDTO<>(eService.save(e)), HttpStatus.CREATED);
	}
	
	@GetMapping("/{enquiryid}")
	public ResponseEntity<?> fetchEnquiry(@PathVariable int enquiryid){
		System.out.println(enquiryid);
		return ResponseEntity.ok(new ResponseDTO<>(eService.fetchEnquiry(enquiryid)));
	}
	
	
	@DeleteMapping("/delete/{enquiryid}")
	public ResponseEntity<?> deleteEnquiry(@PathVariable int enquiryid) {
		return ResponseEntity.ok(new ResponseDTO<>(eService.deleteEnquiry(enquiryid)));
	}
	
}
