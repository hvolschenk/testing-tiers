import React from 'react';
import { Link } from 'react-router-dom';

import i18n from 'i18n';
import { about, home } from 'urls';

import Routes from './routes';

import './component.scss';

export default () => (
  <React.Fragment>
    <ul>
      <li><Link to={home()}>{i18n.home}</Link></li>
      <li><Link to={about()}>{i18n.about}</Link></li>
    </ul>
    <Routes />
  </React.Fragment>
);
