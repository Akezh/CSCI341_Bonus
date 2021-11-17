import { Container, Section, AnimationWrapper, RankingTable } from "components";
import React, { FC, useEffect, useMemo, useState } from "react";
import axios from "axios";

export const PublicServantContributions: FC = () => {
  const [rawPublicServantContributions, setRawPublicServantContributions] =
    useState<
      Array<{
        name: string;
        surname: string;
        num_contributed_records: string;
        num_recorded_countries: string;
        recorded_total_patients: string;
      }>
    >([]);

  const publicServantContributions = useMemo(
    () =>
      rawPublicServantContributions?.map((n) => ({
        "First name": n.name,
        "Last name": n.surname,
        "Contributed records": n.num_contributed_records,
        "Recorded countries": n.num_recorded_countries,
        "Total patients recorded": n.recorded_total_patients,
      })),
    [rawPublicServantContributions]
  );

  const getTopDiseaseRankings = () => {
    axios
      .get("https://pandemic-bonus-app.herokuapp.com/api/records/servants")
      .then((response) => {
        setRawPublicServantContributions(response.data.rows);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getTopDiseaseRankings();
  }, []);

  return (
    <Container style={{ backgroundColor: "#222125" }}>
      <AnimationWrapper time={4}>
        <Section
          title="Public Servants"
          description="These people contribute to pandemic tracking by adding relevant up-to-date data to monitor the global pandemic situation."
        >
          <RankingTable
            columns={[
              "First name",
              "Last name",
              "Contributed records",
              "Recorded countries",
              "Total patients recorded",
            ]}
            data={publicServantContributions}
          />
        </Section>
      </AnimationWrapper>
    </Container>
  );
};
