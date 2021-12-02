import * as React from 'react';
import { Route } from 'react-router-dom';
import useUser from '../../@shared/hooks/useUser';

function Result() {
  const { getUser } = useUser();
  const { id } = getUser();

  return <>결과페이지</>;
}

export default Result;
