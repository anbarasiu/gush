import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import ExternalLink from '../components/ExternalLink';

function Contribute(props) {
  return (
    <Layout location={props.location}>
      <div id="main" style={{ display: 'flex' }}>
        <article id="content" className={`content active timeout`}>
          <h2 className="major">Help make Gush better</h2>
          <section>
            <h3>Inspiration prompts</h3>
            The inspiration prompts are collected in a Pinterest board and
            served on Gush. Help with adding more by requesting to collaborate.
            <ul>
              <li>
                <ExternalLink link="https://in.pinterest.com/anbarasichandra/poems/">
                  Stories
                </ExternalLink>
              </li>
              <li>
                <ExternalLink link="https://in.pinterest.com/anbarasichandra/stories/">
                  Poetry
                </ExternalLink>
              </li>
              <li>
                <ExternalLink link="https://in.pinterest.com/anbarasichandra/words/">
                  Words
                </ExternalLink>
              </li>
            </ul>
          </section>
          <section>
            <h3>Add more features</h3>
            The app is built using Gatsby and React, hosted on Surge. Contribute
            code here -{' '}
            <ExternalLink link="https://github.com/anbarasiu/gush">
              https://github.com/anbarasiu/gush
            </ExternalLink>
          </section>
          <br />
          <section>
            <h3>Credits</h3>
            <div>Gatsby Starter - Dimension.</div>
            <div>
              Design:{' '}
              <ExternalLink link="https://html5up.net">HTML5 UP</ExternalLink>
            </div>
            <div>
              Built with:{' '}
              <ExternalLink href="https://www.gatsbyjs.org/">
                Gatsby.js
              </ExternalLink>
            </div>
            <div>Prompts aggregated from Pinterest </div>
            <div>
              <div>
                Icons made by{' '}
                <ExternalLink
                  link="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </ExternalLink>
              </div>
            </div>
          </section>
          <br />
          <section className="align-center">
            <Link to="/">&#8592; Go Home</Link>
          </section>
        </article>
      </div>
      <div id="bg"></div>
    </Layout>
  );
}

export default Contribute;
