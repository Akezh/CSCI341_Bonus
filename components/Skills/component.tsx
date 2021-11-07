import React, { FC } from "react";
import { Container } from "../Container";
import { Section } from "../Section";
import { Skill } from "./libs/Skill";
import { useWindowSize } from "../../utils/useWindowSize";
import {
  languages,
  languagesMobile,
  frameworks,
  frameworksMobile,
} from "./mock";
import { AnimationWrapper } from "../AnimationWrapper";

export const Skills: FC = () => {
  const windowSize = useWindowSize();

  return (
    <Container style={{ backgroundColor: "#222125" }}>
      <Section title="Skills">
        {windowSize.width <= 576 ? (
          <div>
            <div className="row">
              <div className="tw-mt-10 col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4">
                <AnimationWrapper time={1}>
                  <p className="tw-text-sm" style={{ color: "#63C881" }}>
                    Languages
                  </p>
                </AnimationWrapper>
              </div>
              {languagesMobile.map((skill, i) => (
                <Skill key={i} {...skill} time={i + 0.2} />
              ))}
            </div>

            <div className="row mt-4">
              <div className="tw-mt-10 col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4">
                <AnimationWrapper time={1}>
                  <p className="tw-text-sm" style={{ color: "#63C881" }}>
                    Frameworks
                  </p>
                </AnimationWrapper>
              </div>
              {frameworksMobile.map((skill, i) => (
                <Skill key={i} {...skill} time={i + 0.2} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="row">
              <div className="tw-mt-16 col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4">
                <AnimationWrapper time={1}>
                  <p className="tw-text-md" style={{ color: "#63C881" }}>
                    Languages
                  </p>
                </AnimationWrapper>
              </div>
              {languages.map((skill, i) => (
                <Skill key={i} {...skill} time={i + 0.2} />
              ))}
            </div>

            <div className="row mt-4">
              <div className="tw-mt-16 col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4">
                <AnimationWrapper time={1}>
                  <p className="tw-text-md" style={{ color: "#63C881" }}>
                    Frameworks
                  </p>
                </AnimationWrapper>
              </div>
              {frameworks.map((skill, i) => (
                <Skill key={i} {...skill} time={i + 0.2} />
              ))}
            </div>
          </div>
        )}
      </Section>
    </Container>
  );
};
