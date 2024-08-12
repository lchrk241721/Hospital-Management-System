package com.ayurhit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ayurhit.dto.AppointmentDTO;
import com.ayurhit.service.AppointmentService;

@RestController
@RequestMapping("appointments")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;

	@GetMapping("patient")
	public ResponseEntity<List<AppointmentDTO>> patientAppointments(@RequestParam Long patientId) {
		List<AppointmentDTO> appointments = appointmentService.getPatientAppointments(patientId);
		return ResponseEntity.ok(appointments);
	}
}
