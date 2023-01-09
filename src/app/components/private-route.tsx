import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { getSwapPath } from '../app-router-paths';
import { useAppSelector } from '../store';

export interface PrivateRouteProps {
  children: ReactElement;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const isAuthenticated = useAppSelector((state) => state.networks.address);
  const loading = useAppSelector((state) => state.networks.loading);

  if (loading || loading === undefined) {
    return <p>loading</p>;
  }

  return isAuthenticated ? (
    children
  ) : (
    <Navigate state={{ from: window.location.href }} to={getSwapPath()} />
  );
}
