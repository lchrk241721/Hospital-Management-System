package com.ayurhit.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CurrentMedicationDTO {
	private String dosage;
	private String duration;
	private MedicineDTO medicineDTO;
}
