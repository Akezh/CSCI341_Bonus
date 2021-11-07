import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  date: string;
  desc_1: string;
  desc_2: string;
  desc_3: string;
  icon_1: string;
  icon_2: string;
  icon_3: string;
  icon3width: number;
  icon3height: number;
  appLogo: string;
};
