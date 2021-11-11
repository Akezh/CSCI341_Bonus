import { Container, Section } from "components";
import React, { FC, useEffect, useMemo, useState } from "react";
import { RankingTable } from "../RankingTable";
import { flags } from "./CountriesRankings/mock";
import axios from "axios";

export const CountriesRankings: FC = () => {
    const [topByDeath, setTopByDeath] = useState<Array<{ cname: string, total_deaths: string }>>([]);
    const [topByInfected, setTopByInfected] = useState<Array<{ cname: string, total_patients: string }>>([]);
    const [topSpreadedDiseases, setTopSpreadedDiseases] = useState<Array<{ disease_code: string, infected_people: string, pathogen: string, description: string}>>([]);
    const [topDeathDiseases, setTopDeathDiseases] = useState<Array<{ disease_code: string, died_people: string, pathogen: string, description: string}>>([]);

    const getTopDiseaseRankings = () => {
        axios.get('http://127.0.0.1:8000/api/ranking/deaths')
            .then(response => {
                setTopByDeath(response.data.rows);
            })
            .catch(error => {
                console.log('error', error);
            })

        axios.get('http://127.0.0.1:8000/api/ranking/patients')
            .then(response => {
                setTopByInfected(response.data.rows);
            })
            .catch(error => {
                console.log('error', error);
            })

        axios.get('http://127.0.0.1:8000/api/ranking/diseaseSpreading')
            .then(response => {
                setTopSpreadedDiseases(response.data.rows);
            })
            .catch(error => {
                console.log('error', error);
            })

        axios.get('http://127.0.0.1:8000/api/ranking/diseaseDeaths')
            .then(response => {
                setTopDeathDiseases(response.data.rows);
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    const topByDeathWithFlags = useMemo(() => topByDeath?.map((n)=>({
        Flag: `https://flagcdn.com/64x48/${flags[n.cname]}.png`,
        Country: n.cname,
        'Total deaths': n.total_deaths
    })), [topByDeath]);

    const topByPatientsWithFlags = useMemo(() => topByInfected?.map((n)=>({
        Flag: `https://flagcdn.com/64x48/${flags[n.cname]}.png`,
        Country: n.cname,
        'Total infected people': n.total_patients
    })), [topByInfected]);

    const topDiseasesBySpreading = useMemo(() => topSpreadedDiseases?.map((n)=>({
        "Disease code": n.disease_code,
        'Pathogen': n?.pathogen,
        "Infected people": n.infected_people,
        'Description': n.description,
    })), [topSpreadedDiseases]);

    const topDiseasesByDeath = useMemo(() => topDeathDiseases?.map((n)=>({
        "Disease code": n.disease_code,
        'Pathogen': n?.pathogen,
        "Mortal cases": n.died_people,
        'Description': n.description,
    })), [topDeathDiseases]);


    useEffect(() => {
        getTopDiseaseRankings();
    }, []);

    return (
        <Container style={{ backgroundColor: "#222125" }}>
            <Section title="Rankings by country (Top 12)">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <RankingTable columns={["Flag", "Country", "Total deaths"]} data={topByDeathWithFlags} />
                    </div>
                    <div className="col-md-6 col-12">
                        <RankingTable columns={["Flag", "Country", "Total infected people"]} data={topByPatientsWithFlags} />
                    </div>
                </div>
            </Section>
            <div className="mt-5"/>
            <Section className="tw-mt-4" title="Rankings by disease type (Top 7)">
                <div className="row">
                    <div className="col-12">
                        <p>Most spread diseases</p>
                        <RankingTable columns={["Disease code", "Pathogen", "Infected people", "Description"]} data={topDiseasesBySpreading} />
                    </div>
                    <div className="col-12">
                        <p>Most dangerous diseases</p>
                        <RankingTable columns={["Disease code", "Pathogen", "Mortal cases", "Description"]} data={topDiseasesByDeath} />
                    </div>
                </div>
            </Section>
        </Container>
    );
};
