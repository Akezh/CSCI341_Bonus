import { Container, Section } from "components";
import React, { FC } from "react";
import { Timeline } from "./libs/Timeline";

export const Experience: FC = () => {
  return (
    <Container style={{ backgroundColor: "#28282C" }}>
      <Section title="Experience">
        <Timeline />
      </Section>
    </Container>
  );
};
