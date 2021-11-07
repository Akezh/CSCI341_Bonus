import React, { FC } from "react";
import { experienceInfo } from "./mock";
import { useWindowSize } from "../../../../utils/useWindowSize";
import { AnimationWrapper } from "../../../AnimationWrapper";

export const Timeline: FC = () => {
  const windowSize = useWindowSize();
  const isSmall: boolean = windowSize.width <= 575;

  return (
    <div className="row text-white">
      {experienceInfo.map((experience, i) => {
        return (
          <div
            style={{
              justifyContent: isSmall
                ? i % 2 === 0
                  ? "start"
                  : "flex-end"
                : "start",
            }}
            key={i}
            className="d-flex col-lg-3 col-md-6 col-sm-6 col-12 py-3"
          >
            <AnimationWrapper time={i + 0.5}>
              <div className="mb-3">
                <p style={{ color: "#77FE9E" }} className="tw-text-sm">
                  {experience.number}
                </p>
              </div>
              <p
                style={{ color: "#A2A0A8" }}
                className="tw-text-sm sm:tw:mb-0 tw:mb-2"
              >
                {experience.role}
              </p>
              <p
                style={{ color: "#A2A0A8" }}
                className="tw-text-sm sm:tw:mb-0 tw:mb-2"
              >
                {experience.company}
              </p>
              <p
                style={{ color: "#A2A0A8" }}
                className="tw-text-sm sm:tw:mb-0 tw:mb-2"
              >
                {experience.location}
              </p>
              <p
                style={{ color: "#A2A0A8" }}
                className="tw-text-sm sm:tw:mb-0 tw:mb-2"
              >
                {experience.date}
              </p>
            </AnimationWrapper>
          </div>
        );
      })}
    </div>
  );
};
