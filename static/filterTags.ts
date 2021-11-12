export type FilterMappingType = {
  readonly field: string;
  readonly value: string;
};

export const filterTags: Array<FilterMappingType> = [
  { field: "Death ratio", value: "death_ratio" },
  { field: "Total deaths", value: "total_deaths" },
  { field: "Infected people", value: "total_patients" },
  { field: "Population death ratio", value: "population_death_ratio" },
  { field: "Population infection ratio", value: "population_infection_ratio" },
  { field: "Population", value: "population" },
];
