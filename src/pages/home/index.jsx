import React from 'react';

import i18n from 'i18n';

export default () => (
  <div>
    <h1 data-qa="home-page-title">{i18n.home}</h1>
    <p data-qa="home-page-intro-text">Hendrik is cool</p>
  </div>
);
