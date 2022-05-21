import React from "react";
import { PAGE_LABELS, ROUTES } from "../../constants/nav";

export type INavConfig = {
  path: ROUTES;
  nav: {
    icon: React.FC;
    label: PAGE_LABELS;
    component: React.FC;
  };
};
