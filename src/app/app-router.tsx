import { Routes, Route } from 'react-router-dom';
import { CustomRouter, PrivateRoute } from './components';
import {
  routes,
  layouts,
  Route as IRoute,
  RouteType,
} from './app-router-config';
import { history } from './utils/history';

export function renderRoute(
  { children, path, element }: IRoute,
  index: number,
  type: RouteType,
) {
  const hasChildren = children && children.length > 0;
  const isPublic = type === RouteType.PUBLIC || type === RouteType.COMMON;
  const elem = isPublic ? element : <PrivateRoute>{element}</PrivateRoute>;

  return (
    <Route key={index} element={elem} path={path}>
      {hasChildren
        ? children.map((child, j) => renderRoute(child, j, type))
        : null}
    </Route>
  );
}

export function renderRouteSet(type: RouteType, index: number) {
  return (
    <Route key={index} element={layouts[type]}>
      {routes[type].map((route, i) => renderRoute(route, i, type))}
    </Route>
  );
}

export default function AppRouter() {
  return (
    <CustomRouter history={history}>
      <Routes>{Object.values(RouteType).map(renderRouteSet)}</Routes>
    </CustomRouter>
  );
}
