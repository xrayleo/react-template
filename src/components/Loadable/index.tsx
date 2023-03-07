import { FC, Suspense } from 'react';
import Loading from '../Loading';
import { LoadableProps } from './types';

const Loadable = (Component: any) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

export default Loadable;
