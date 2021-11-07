import { Container, Section } from "components";
import React, { FC, useEffect, useState } from "react";
import { RankingTable } from "../RankingTable";
// import { animals } from  "./mock";
import axios from "axios";

export const Rankings: FC = () => {
    const [topByDeath, setTopByDeath] = useState<Array<{ cname: string, total_deaths: string }>>([]);

    const getTopCountriesByDeath = () => {
        axios.get('http://127.0.0.1:8000/api/ranking/deaths')
            .then(response => {
                setTopByDeath(response.data.rows);
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    useEffect(() => {
        getTopCountriesByDeath();
    }, []);

    return (
        <Container style={{ backgroundColor: "#222125" }}>
            <Section title="Rankings">
                <RankingTable columns={["cname", "total_deaths"]} data={topByDeath} />
                <img alt="flag" src="https://www.countryflags.io/usa/flat/64.png" />
            </Section>
        </Container>
    );
};
