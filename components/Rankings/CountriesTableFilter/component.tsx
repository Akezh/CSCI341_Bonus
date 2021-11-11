import { Container, Section } from "components";
import React, { FC, useEffect, useMemo, useState } from "react";
import { RankingTable } from "components/RankingTable";
import { flags, filterTags } from "static/flags";
import { Attributes } from "./props";
import axios from "axios";

export const CountriesTableFilter: FC = () => {
  const [countries, setCountries] = useState<Array<Attributes>>([]);

  const getCountriesTable = () => {
    axios
      .get("http://127.0.0.1:8000/api/countries/pandemicStatus")
      .then((response) => {
        setCountries(response.data.rows);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const countriesTable = useMemo(
    () =>
      countries?.map((n) => ({
        Flag: `https://flagcdn.com/64x48/${flags[n.cname]}.png`,
        Country: n.cname,
        "Death ratio": n.death_ratio,
        "Total deaths": n.total_deaths,
        "Infected people": n.total_patients,
        "Population death ratio": n.population_death_ratio,
        "Population infection ratio": n.population_infection_ratio,
        Population: n.population,
      })),
    [countries]
  );

  useEffect(() => {
    getCountriesTable();
  }, []);

  return (
    <Container style={{ backgroundColor: "#222125" }}>
      <Section title="Global pandemic situation">
        <div className="col-12">
          <RankingTable
            columns={[
              "Flag",
              "Country",
              "Death ratio",
              "Total deaths",
              "Infected people",
              "Population death ratio",
              "Population infection ratio",
              "Population",
            ]}
            data={countriesTable}
          />
        </div>
      </Section>
    </Container>
  );
};
