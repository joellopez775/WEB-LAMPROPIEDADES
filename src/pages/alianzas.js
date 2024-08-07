import React, { Fragment } from 'react';

import Hero from '../components/alianzas/hero';
import History from '../components/alianzas/history';
import Description from '../components/alianzas/description';
import Stats from '../components/alianzas/stats';
import Team from '../components/alianzas/team';
import Ubication from '../components/ubication';
import Contact from '../components/contact';

export default ()=> {

  return(
    <Fragment>
      <Hero />
      <History />
 
  
      <Contact />
    </Fragment>
  )
}