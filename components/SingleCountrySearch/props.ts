export type Attributes = {
  readonly cname: string;
  readonly death_ratio: string;
  readonly total_deaths: string;
  readonly total_patients: string;
  readonly population: string;
  readonly population_death_ratio: string;
  readonly population_infection_ratio: string;
  readonly average_salary: string;
  readonly public_survants_number: string;
  readonly doctors_number: string;
  readonly discovered_diseases: string;
  readonly first_disease_encounter_date: string;
};

export type CountryDataMapping = {
  readonly field: string;
  readonly value: string;
};
