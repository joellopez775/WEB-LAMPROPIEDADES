import React, { Fragment } from 'react';

import Hero from '../components/certs/hero';
import Description from '../components/certs/description';
import Stats from '../components/certs/stats';
import Team from '../components/certs/team';
import Ubication from '../components/ubication';
import Contact from '../components/contact';

export default ()=> {

  return(
    <Fragment>
      <Hero />
      <Team />
    </Fragment>
  )
}