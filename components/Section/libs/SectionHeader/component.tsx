import React, { FC } from "react";

import { Props } from "./props";

export const SectionHeader: FC<Props> = ({ title }: Props) => {
  return (
    <h2 className="tw-mb-8 tw-text-2xl tw-font-regular md:tw-text-sectionHeader text-white">
      {title}
    </h2>
  );
};
