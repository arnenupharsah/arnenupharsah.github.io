import React from 'react';
import Main from '../layouts/Main';

const Newsletter = () => (
  <Main
    title="Newsletter"
    description="Aulick's Explorations"
  >
    <iframe title="Newsletter" src="https://aulicksah.substack.com/embed" width="100%" height="320" style={{ border: '1px solid #EEE', background: 'white' }} frameBorder="0" scrolling="no" />
  </Main>
);

export default Newsletter;
