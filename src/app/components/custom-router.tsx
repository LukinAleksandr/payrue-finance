import { useLayoutEffect, useState } from 'react';
import { BrowserRouterProps, Router } from 'react-router-dom';
import { History } from 'history';

export interface CustomRouterProps extends BrowserRouterProps {
  history: History;
}
export default function CustomRouter({
  basename,
  history,
  children,
}: CustomRouterProps) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });
  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      // eslint-disable-next-line react/no-children-prop
      children={children}
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
}
