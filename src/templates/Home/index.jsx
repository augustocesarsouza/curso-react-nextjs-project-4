/* eslint-disable no-unused-vars */
import P from 'prop-types';
import Head from 'next/head';

import { Base } from '../Base';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import config from '../../config';

function Home({ data }) {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
      <Head>
        <title>{title}</title>
      </Head>
      {sections.map((section, index) => {
        const key = `${slug}-${index}`;
        const { component } = section;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns {...section} key={key} />;
        }

        if (component === 'section.section-content') {
          return <GridContent {...section} key={key} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText {...section} key={key} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage {...section} key={key} />;
        }
      })}
    </Base>
  );
}

export default Home;

Home.propTypes = {
  data: P.array,
};
