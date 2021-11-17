import { Container, Section, AnimationWrapper, RankingTable } from "components";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { flags } from "static/flags";
import { filterTags, FilterMappingType } from "static/filterTags";
import { Attributes } from "./props";
import axios from "axios";

export const CountriesTableFilter: FC = () => {
  const [countries, setCountries] = useState<Array<Attributes>>([]);

  const getCountriesTable = () => {
    axios
      .get(
        "https://pandemic-bonus-app.herokuapp.com/api/countries/pandemicStatus"
      )
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

  const onFilterTagClick = useCallback(
    (filterTag: string) => () => {
      axios({
        method: "post",
        url: "https://pandemic-bonus-app.herokuapp.com/api/countries/pandemicStatus",
        headers: {},
        data: {
          filter_field: filterTag,
        },
      })
        .then((response) => {
          setCountries(response.data.rows);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    []
  );

  return (
    <Container style={{ backgroundColor: "#28282C" }}>
      <AnimationWrapper time={3}>
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
            <div className="d-flex align-items-center">
              <p className="tw-text-lg tw-font-bold tw-my-4 tw-mr-4 text-white">
                Filters:
              </p>
              {filterTags.map((n: FilterMappingType, i: number) => (
                <button
                  key={i}
                  type="button"
                  className="btn btn-outline-light tw-mr-4"
                  onClick={onFilterTagClick(n.value)}
                >
                  {n.field}
                </button>
              ))}
            </div>
          </div>
        </Section>
      </AnimationWrapper>
    </Container>
  );
};
