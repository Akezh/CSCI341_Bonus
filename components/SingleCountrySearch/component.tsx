import { Container, Section, AnimationWrapper } from "components";
import React, { FC, useCallback, useMemo, useState } from "react";
import { flags } from "static/flags";
import { Attributes, CountryDataMapping } from "./props";
import axios from "axios";

export const SingleCountrySearch: FC = () => {
  const [country, setCountry] = useState<Attributes>();
  const [countryField, setCountryField] = useState("");

  const onCountryFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryField(e.target.value);
  };

  const onSearchClicked = useCallback(
    (countryName: string) => () => {
      console.log("countryName", countryName);
      axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/countries/country",
        headers: {},
        data: {
          country: countryName,
        },
      })
        .then((response) => {
          setCountry(response.data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    []
  );

  const countryInfo: Array<CountryDataMapping> | undefined = useMemo(
    () =>
      country && [
        {
          field: "Flag",
          value: `https://flagcdn.com/64x48/${flags[country.cname]}.png`,
        },
        { field: "Death ratio", value: country.death_ratio },
        { field: "Country", value: country.cname },
        { field: "Total deaths", value: country.total_deaths },
        { field: "Population", value: country.population },
        { field: "Total infected people", value: country.total_patients },
        {
          field: "Population death ratio",
          value: country.population_death_ratio,
        },
        {
          field: "Average salaries",
          value: country.average_salary,
        },
        {
          field: "Population infection ratio",
          value: country.population_infection_ratio,
        },
        {
          field: "Number of public servants",
          value: country.public_survants_number,
        },
        {
          field: "Number of discovered diseases",
          value: country.discovered_diseases,
        },
        {
          field: "Number of doctors",
          value: country.doctors_number,
        },
        {
          field: "First disease encounter date",
          value: country.first_disease_encounter_date.substring(0, 10),
        },
      ],
    [country]
  );

  return (
    <Container style={{ backgroundColor: "#222125" }}>
      <AnimationWrapper time={3}>
        <Section title="Explore countries">
          <div className="row col-8 tw-mx-auto tw-mb-5">
            <div className="mb-4 col-9">
              <input
                type="text"
                className="form-control"
                style={{ background: "transparent", color: "white" }}
                placeholder="Country"
                value={countryField}
                onChange={onCountryFieldChange}
              />
            </div>
            <div className="mb-4 col-3">
              <button
                className="btn btn-outline-light w-95"
                onClick={onSearchClicked(countryField)}
              >
                Search
              </button>
            </div>
          </div>
          <div className="row">
            {countryInfo &&
              countryInfo.map((n, i) => (
                <React.Fragment key={i}>
                  {i % 2 !== 0 && (
                    <div className="col-md-1 d-md-block d-none" />
                  )}
                  <div className="col-md-5 col-12 tw-mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="tw-text-md tw-font-bold text-white">
                        {n.field}
                      </p>
                      {n.value.startsWith("http") ? (
                        <img alt="flag" src={n.value} width="48" height="36" />
                      ) : (
                        <p className="tw-text-md text-white">{n.value}</p>
                      )}
                    </div>
                  </div>
                  {i % 2 === 0 && (
                    <div className="col-md-1 d-md-block d-none" />
                  )}
                </React.Fragment>
              ))}
          </div>
        </Section>
      </AnimationWrapper>
    </Container>
  );
};
