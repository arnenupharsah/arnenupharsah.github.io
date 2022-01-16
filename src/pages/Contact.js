import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Aulick Sah via email @ arnenupharsah@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Got ideas? Suggestions? Or feedback? Hit me up!</p>
        <p>Mail me at: </p>
        <EmailLink />
        OR
        <p>Book a 30-min slot to talk to me:</p>
        <a href="https://calendly.com/arnenupharsah/talktoaulick">Calendly Meeting</a>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
