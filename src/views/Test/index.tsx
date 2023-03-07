import { RootState } from '@/store';
import { add, increment } from '@/store/slices/counterSlice';
import http from '@/utils/request';
import { Button } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Loading from '@/components/Loading';
import { useTranslation } from 'react-i18next';
import { TestI18Next } from './types';

const Test = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();
  const { name, cta, incentive, button } = t('home') as TestI18Next;

  useEffect(() => {
    http.get('api/category').then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <Wrapper>
      <Box>
        <br />
        redux全局状态: {count}
        <br />
        <br />
        <Button onClick={() => dispatch(add(2))}>按钮</Button>
        <Loading />
        <br />
        <p>国际化内容: </p>
        <p>{name}</p>
        <Button
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'tc' ? 'en' : 'tc')
          }
        >
          切换国际化
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Test;

const Box = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
`;

const Wrapper = styled(motion.div)`
  background-color: yellow;
`;
