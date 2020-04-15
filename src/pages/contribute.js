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
            <h3>Improve Templates</h3>
            Templates for the final generated image are beautiful free stock
            images resized to 1080x1080 (Insta-worthy), overlayed with 60% white
            background and 12px padding.
          </section>
          <br />
          <section>
            <h3>Credits</h3>
            <ul>
              <li>
                Design by{' '}
                <ExternalLink link="https://html5up.net">HTML5 UP</ExternalLink>
              </li>
              <li>
                Built with{' '}
                <ExternalLink href="https://www.gatsbyjs.org/">
                  Gatsby.js
                </ExternalLink>{' '}
                starter - Dimension
              </li>
              <li>Prompts aggregated from Pinterest </li>
              <li>Template images from Unsplash </li>
              <li>
                Icon by{' '}
                <ExternalLink
                  link="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </ExternalLink>
              </li>
            </ul>
          </section>
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
