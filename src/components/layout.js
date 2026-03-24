import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/scss/main.scss';

const Layout = ({ children, location }) => {
  let content;

  if (location && location.pathname === '/') {
    content = <div>{children}</div>;
  } else {
    content = (
      <div id="wrapper" className="page">
        {children}
      </div>
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              keywords
              siteUrl
              author
              social {
                twitter
                github
              }
            }
          }
        }
      `}
      render={(data) => {
        const { title, description, keywords, siteUrl, author, social } = data.site.siteMetadata;
        return (
        <>
          <Helmet
            title={title}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
              { name: 'author', content: author },
              { name: 'apple-mobile-web-app-capable', content: 'yes' },
              { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },

              // Open Graph
              { property: 'og:title', content: title },
              { property: 'og:description', content: description },
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: siteUrl },
              { property: 'og:site_name', content: 'Gush' },

              // Twitter Card
              { name: 'twitter:card', content: 'summary_large_image' },
              { name: 'twitter:creator', content: `@${social.twitter}` },
              { name: 'twitter:title', content: title },
              { name: 'twitter:description', content: description },
            ]}
          >
            <html lang="en" />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebApplication',
                name: 'Gush',
                description: description,
                url: siteUrl,
                applicationCategory: 'CreativeWork',
                operatingSystem: 'Web',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'USD'
                },
                author: {
                  '@type': 'Person',
                  name: author,
                  url: 'https://anbuu.in',
                  jobTitle: 'Software Engineer',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Frankfurt',
                    addressCountry: 'Germany'
                  },
                  sameAs: [
                    `https://github.com/${social.github}`,
                    `https://twitter.com/${social.twitter}`,
                    'https://anbuu.in',
                    'https://lit.anbuu.in',
                    'https://fluid.anbuu.in',
                    'https://fable.anbuu.in'
                  ]
                },
                genre: ['Creative Writing', 'Writing Prompts', 'Inspiration'],
                inLanguage: 'en-US'
              })}
            </script>
          </Helmet>
          {content}
        </>
      )}}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
