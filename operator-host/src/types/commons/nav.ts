import React from "react";
import { ROUTES, PAGE_LABELS } from "../../constants/nav";

export type INavConfig = {
  path: ROUTES;
  nav: {
    icon: React.FC;
    label: PAGE_LABELS;
    component: React.FC;
  };
};
