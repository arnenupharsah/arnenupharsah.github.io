import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import Main from '../layouts/Main';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Recommendations = () => (
  <Main
    title="Recommendations"
    description="Recommendations"
  >
    <article className="post markdown" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Recommendations</Link></h2>
        </div>
      </header>
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/about">Amazon Kindle</Link></h2>
          </div>
        </header>
        <ReactMarkdown
          source="sdfgh"
          renderers={{
            Link: LinkRenderer,
          }}
          escapeHtml={false}
        />
      </article>
    </article>
  </Main>
);

export default Recommendations;
