import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsAPI } from '../../api/api';
import { news } from '../../redux/newsReducer';
import Preloader from '../common/Preloader/Preloader';
import { NewsType } from '../../redux/newsReducer';

import News from './News';
import { AppStateType } from '../../redux/redux-store';
type PropsType = {
}
export const NewsContainer: React.FC<PropsType> = () => {
  
  const state = useSelector((state: AppStateType) => state.news);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(news())
  }, [])

  return (
    <>
      {state.isFetching ? <Preloader /> : null}
      <News
        news={state.news}
      />
    </>
  )
}
