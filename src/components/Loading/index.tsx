import { Spin } from 'antd';
import { FC } from 'react';
import { LoadingProps } from './types';

const Loading: FC<LoadingProps> = ({ tip = 'Loading...' }) => {
  return <Spin tip={tip} size="default" />;
};

export default Loading;
