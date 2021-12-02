import * as React from 'react';
import { Route } from 'react-router-dom';
import useUser from '../../@shared/hooks/useUser';

function Vote() {
  const { getUser } = useUser();
  const { id } = getUser();

  return <>투표페이지</>;
}

export default Vote;
