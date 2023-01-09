import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import {
  AboutScreen,
  IntroScreen,
  PropelScreen,
  StakingScreen,
  SwapScreen,
} from '../features';
import ProfileScreen from '../features/profile/screens/profile-screen';
import { PathsMap } from './app-router-paths';
import { DashboardLayout } from './layouts';
import NotFoundPage from './pages/not-found-page';

export enum RouteType {
  COMMON = 'common',
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export interface Route {
  path: string;
  element: ReactElement;
  children?: Route[];
}

export type Routes = Record<RouteType, Route[]>;
export type Layouts = Record<RouteType, ReactElement>;

export const routes: Routes = {
  [RouteType.COMMON]: [
    {
      path: PathsMap.INTRO,
      element: <IntroScreen />,
    },
    {
      path: PathsMap.NOT_FOUND,
      element: <NotFoundPage />,
    },
  ],
  [RouteType.PUBLIC]: [
    {
      path: PathsMap.ABOUT,
      element: <AboutScreen />,
    },
    {
      path: PathsMap.PROPEL,
      element: <PropelScreen />,
    },
    {
      path: PathsMap.SWAP,
      element: <SwapScreen />,
    },
    {
      path: PathsMap.STAKING,
      element: <StakingScreen />,
    },
  ],
  [RouteType.PRIVATE]: [
    {
      path: PathsMap.PROFILE,
      element: <ProfileScreen />,
    },
  ],
};

export const layouts: Layouts = {
  [RouteType.PRIVATE]: <DashboardLayout />,
  [RouteType.PUBLIC]: <DashboardLayout />,
  [RouteType.COMMON]: <Outlet />,
};
