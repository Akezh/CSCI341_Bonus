import React, { FC } from "react";
import { Props } from "./props";
// @ts-ignore

export const ProjectCard: FC<Props> = ({
  title,
  date,
  desc_1,
  desc_2,
  desc_3,
  icon_1,
  icon_2,
  icon_3,
  icon3width,
  icon3height,
  appLogo,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className="tw-max-w-screen-md tw-w-100 tw-shadow-lg tw-rounded-lg tw-bg-projectCardBack lg:tw-p-6 md:tw-p-6 sm:tw-p-4 tw-p-4 tw-mt-8"
    >
      <div className="tw-grid tw-grid-cols-2">
        <div className="tw-flex tw-justify-start tw-items-end">
          <p className="tw-font-bold text-white">{title}</p>
        </div>
        <div className="tw-flex tw-justify-end tw-items-start">
          <p className="tw-font-medium sm:tw-text-sm tw-text-xs text-white">
            {date}
          </p>
        </div>
      </div>

      <p className="tw-font-regular tw-text-sm text-white tw-mt-3">
        • {desc_1}
      </p>
      <p className="tw-font-regular tw-text-sm text-white tw-mt-3">
        • {desc_2}
      </p>
      <p className="tw-font-regular tw-text-sm text-white tw-mt-3">
        • {desc_3}
      </p>

      <div className="tw-mt-3">
        <div className="tw-flex tw-space-between">
          <div className="tw-flex tw-flex-row">
            <div className="tw-flex tw-items-center tw-mr-8">
              <img alt="stack" src={icon_1} width={36} height={36} />
            </div>
            <div className="tw-flex tw-items-center tw-mr-8">
              <img alt="stack" src={icon_2} width={36} height={36} />
            </div>
            <div className="tw-flex tw-items-center tw-mr-8">
              <img
                alt="stack"
                src={icon_3}
                width={icon3width}
                height={icon3height}
              />
            </div>
          </div>
          <div className="tw-ml-auto">
            <img alt="stack" src={appLogo} width={56} height={56} />
          </div>
        </div>
      </div>
    </div>
  );
};
