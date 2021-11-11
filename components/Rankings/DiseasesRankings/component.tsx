import { Container, Section } from "components";
import React, { FC, useEffect, useMemo, useState } from "react";
import { RankingTable } from "components/RankingTable";
import axios from "axios";

export const DiseasesRankings: FC = () => {
  const [topSpreadedDiseases, setTopSpreadedDiseases] = useState<
    Array<{
      disease_code: string;
      infected_people: string;
      pathogen: string;
      description: string;
    }>
  >([]);
  const [topDeathDiseases, setTopDeathDiseases] = useState<
    Array<{
      disease_code: string;
      died_people: string;
      pathogen: string;
      description: string;
    }>
  >([]);

  const getTopDiseaseRankings = () => {
    axios
      .get("http://127.0.0.1:8000/api/ranking/diseaseSpreading")
      .then((response) => {
        setTopSpreadedDiseases(response.data.rows);
      })
      .catch((error) => {
        console.log("error", error);
      });

    axios
      .get("http://127.0.0.1:8000/api/ranking/diseaseDeaths")
      .then((response) => {
        setTopDeathDiseases(response.data.rows);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const topDiseasesBySpreading = useMemo(
    () =>
      topSpreadedDiseases?.map((n) => ({
        "Disease code": n.disease_code,
        Pathogen: n?.pathogen,
        "Infected people": n.infected_people,
        Description: n.description,
      })),
    [topSpreadedDiseases]
  );

  const topDiseasesByDeath = useMemo(
    () =>
      topDeathDiseases?.map((n) => ({
        "Disease code": n.disease_code,
        Pathogen: n?.pathogen,
        "Mortal cases": n.died_people,
        Description: n.description,
      })),
    [topDeathDiseases]
  );

  useEffect(() => {
    getTopDiseaseRankings();
  }, []);

  return (
    <Container style={{ backgroundColor: "#222125" }}>
      <Section className="tw-mt-4" title="Rankings by disease type (Top 7)">
        <div className="row">
          <div className="col-12">
            <p>Most spread diseases</p>
            <RankingTable
              columns={[
                "Disease code",
                "Pathogen",
                "Infected people",
                "Description",
              ]}
              data={topDiseasesBySpreading}
            />
          </div>
          <div className="col-12">
            <p>Most dangerous diseases</p>
            <RankingTable
              columns={[
                "Disease code",
                "Pathogen",
                "Mortal cases",
                "Description",
              ]}
              data={topDiseasesByDeath}
            />
          </div>
        </div>
      </Section>
    </Container>
  );
};
