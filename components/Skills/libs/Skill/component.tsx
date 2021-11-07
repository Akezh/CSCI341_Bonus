import React, { FC } from "react";
import { Props } from "./props";
import { AnimationWrapper } from "../../../AnimationWrapper";

export const Skill: FC<Props> = ({
  skillName,
  imageSource,
  height,
  width,
  time,
}: Props) => {
  return (
    <div className="tw-mt-8 col-lg-2 col-md-2 col-sm-4 col-xs-4 col-4">
      <AnimationWrapper time={time}>
        <div className="skill d-flex justify-content-center align-items-center">
          <img alt="skill" src={imageSource} height={height} width={width} />
        </div>
        <div className="d-flex align-items-center justify-content-center tw-mt-3">
          <p className="text-white lg:tw-text-sm md:tw-text-sm sm:tw-text-xs tw-text-xs">
            {skillName}
          </p>
        </div>
      </AnimationWrapper>
    </div>
  );
};
