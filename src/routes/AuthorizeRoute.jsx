import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authCallbackSuccess, authCallbackError } from '../redux/actions';

import { getInfoFromHashUrl } from '../modules/url-hash';

import { Authorize } from '../containers/';

const AuthorizateRoute = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const [redirect, setRedirect] = useState(false);
  const isLogged = store.auth.isLogged;

  const urlHash = window.location.hash;

  useEffect(() => {
    const hashData = getInfoFromHashUrl(urlHash);
    console.log(hashData);

    if (hashData.error) {
      dispatch(authCallbackError(hashData.error));
      return
    }

    dispatch(authCallbackSuccess(hashData));
  }, [urlHash, dispatch]);

  useEffect(() => {
    if (isLogged) {
      setTimeout(() => setRedirect(true), 3000);
    }
  }, [isLogged]);

  if (redirect) {
    return (
      <Redirect to={{ pathname: '/dashboard' }} />
    );
  }
  
  console.log(store);
  return (
    <Authorize />
  );
}

export default AuthorizateRoute;
