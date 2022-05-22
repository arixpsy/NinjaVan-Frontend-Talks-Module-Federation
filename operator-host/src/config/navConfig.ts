import { ROUTES, PAGE_LABELS } from "../constants/nav";
import { INavConfig } from "../types/commons/nav";
import { HomeOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Home, MicroSite } from "./../containers";

export const navigation: Record<ROUTES, INavConfig> = {
  [ROUTES.HOME]: {
    path: ROUTES.HOME,
    nav: {
      icon: HomeOutlined,
      label: PAGE_LABELS.HOME,
      component: Home,
    },
  },
  [ROUTES.MICROSITE]: {
    path: ROUTES.MICROSITE,
    nav: {
      icon: AppstoreOutlined,
      label: PAGE_LABELS.MICROSITE,
      component: MicroSite,
    },
  },
};

export const getNavConfig = [
  navigation[ROUTES.HOME],
  navigation[ROUTES.MICROSITE],
];
