import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, useRouteMatch } from 'react-router-dom';

import {
  getCategoriesFailed,
  getCategoriesRequest,
  getCategoriesSuccess,
  getUserFailed,
  getUserRequest,
  getUserSuccess,
  logout,
} from '../actions';

import { endpoints } from '../modules/endpoints';

import { request } from '../modules/request';

import { WelcomeBox } from '../components';
import {
  Categories,
  Dashboard,
  PrivateRoute,
  Topbar,
} from '../containers';

const { getCategories, getUserProfile,  } = endpoints;
