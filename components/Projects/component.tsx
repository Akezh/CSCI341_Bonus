import { AnimationWrapper, Container, Section } from "components";
import React, { FC } from "react";
import { ProjectCard } from "./libs/ProjectCard";
import { projectsInfo } from "./mock";
import { Props as ProjectType } from "./libs/ProjectCard/props";

export const Projects: FC = () => {
  return (
    <Container style={{ backgroundColor: "#222125" }}>
      <Section title="Projects">
        <div className="tw-max-w-screen-xl">
          {projectsInfo.map((project: ProjectType, i: number) => {
            return (
              <AnimationWrapper time={i + 0.5}>
                <ProjectCard
                  style={{ marginLeft: i % 2 != 0 ? "auto" : 0 }}
                  key={i}
                  {...project}
                />
              </AnimationWrapper>
            );
          })}
        </div>
      </Section>
    </Container>
  );
};
