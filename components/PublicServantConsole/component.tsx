import { Container, Section } from "components";
import React, { FC } from "react";

export const PublicServantConsole: FC = () => {
  return (
    <Container style={{ backgroundColor: "#222125" }}>
      <Section
        title="Public Servant Console"
        description="ADD records to support world pandemic tracking. UPDATE records to keep people up to date with the disease data. DELETE records that are out of date or falsy."
      ></Section>
    </Container>
  );
};
