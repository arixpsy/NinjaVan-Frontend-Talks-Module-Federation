import { ROUTES, PAGE_LABELS } from "../constants/nav";
import { INavConfig } from "../types/commons/nav";
import {
  HomeOutlined,
  AppstoreOutlined,
  BarsOutlined,
  ExpandOutlined,
  ControlOutlined,
} from "@ant-design/icons";
import {
  Home,
  Components,
  Constants,
  Contexts,
  Utils,
} from "./../containers";

export const navigation: Record<ROUTES, INavConfig> = {
  [ROUTES.HOME]: {
    path: ROUTES.HOME,
    nav: {
      icon: HomeOutlined,
      label: PAGE_LABELS.HOME,
      component: Home,
    },
  },
  [ROUTES.COMPONENTS]: {
    path: ROUTES.COMPONENTS,
    nav: {
      icon: AppstoreOutlined,
      label: PAGE_LABELS.COMPONENTS,
      component: Components,
    },
  },
  [ROUTES.CONSTANTS]: {
    path: ROUTES.CONSTANTS,
    nav: {
      icon: BarsOutlined,
      label: PAGE_LABELS.CONSTANTS,
      component: Constants,
    },
  },
  [ROUTES.CONTEXTS]: {
    path: ROUTES.CONTEXTS,
    nav: {
      icon: ExpandOutlined,
      label: PAGE_LABELS.CONTEXTS,
      component: Contexts,
    },
  },
  [ROUTES.UTILS]: {
    path: ROUTES.UTILS,
    nav: {
      icon: ControlOutlined,
      label: PAGE_LABELS.UTILS,
      component: Utils,
    },
  },
};

export const getNavConfig = [
  navigation[ROUTES.HOME],
  navigation[ROUTES.COMPONENTS],
  navigation[ROUTES.CONSTANTS],
  navigation[ROUTES.CONTEXTS],
  navigation[ROUTES.UTILS],
];
