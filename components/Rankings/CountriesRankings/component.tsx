import { Container, Section, AnimationWrapper, RankingTable } from "components";
import React, { FC, useEffect, useMemo, useState } from "react";
import { flags } from "static/flags";
import axios from "axios";

export const CountriesRankings: FC = () => {
  const [topByDeath, setTopByDeath] = useState<
    Array<{ cname: string; total_deaths: string }>
  >([]);
  const [topByInfected, setTopByInfected] = useState<
    Array<{ cname: string; total_patients: string }>
  >([]);

  const getTopDiseaseRankings = () => {
    axios
      .get("http://127.0.0.1:8000/api/ranking/deaths")
      .then((response) => {
        setTopByDeath(response.data.rows);
      })
      .catch((error) => {
        console.log("error", error);
      });

    axios
      .get("http://127.0.0.1:8000/api/ranking/patients")
      .then((response) => {
        setTopByInfected(response.data.rows);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const topByDeathWithFlags = useMemo(
    () =>
      topByDeath?.map((n) => ({
        Flag: `https://flagcdn.com/64x48/${flags[n.cname]}.png`,
        Country: n.cname,
        "Total deaths": n.total_deaths,
      })),
    [topByDeath]
  );

  const topByPatientsWithFlags = useMemo(
    () =>
      topByInfected?.map((n) => ({
        Flag: `https://flagcdn.com/64x48/${flags[n.cname]}.png`,
        Country: n.cname,
        "Total infected people": n.total_patients,
      })),
    [topByInfected]
  );

  useEffect(() => {
    getTopDiseaseRankings();
  }, []);

  return (
    <Container style={{ backgroundColor: "#222125" }}>
      <AnimationWrapper time={4}>
        <Section title="Rankings by country (Top 12)">
          <div className="row">
            <div className="col-md-6 col-12">
              <p className="text-white tw-font-bold text-center tw-mb-8">
                Countries with top mortal cases
              </p>
              <RankingTable
                columns={["Flag", "Country", "Total deaths"]}
                data={topByDeathWithFlags}
              />
            </div>
            <div className="col-md-6 col-12">
              <p className="text-white tw-font-bold text-center tw-mb-8">
                Countries with top infection cases
              </p>
              <RankingTable
                columns={["Flag", "Country", "Total infected people"]}
                data={topByPatientsWithFlags}
              />
            </div>
          </div>
        </Section>
      </AnimationWrapper>
    </Container>
  );
};
