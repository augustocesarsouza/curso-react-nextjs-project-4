/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as Styled from './styles';

import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';

import { Base } from '../Base';
import { Heading } from '../../components/Heading';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import config from '../../config';
import { loadPages } from '../../api/load-pages';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : config.defaultSlug;

    const load = async () => {
      try {
        // const data = await fetch(url.siteUrl);
        // const json = await data.json();
        // // [attributes] por que 'attributes' ali é Objeto e la precisa de uma array de objetos o mapData
        // // [0] por que o map retorna um array d objeto
        // const { attributes } = json.data[0];
        // const pageData = mapData([attributes])[0];

        let pageData = await loadPages(slug);

        setData(() => pageData);
      } catch (error) {
        console.error(error);
        setData(undefined);
      }
    };
    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando....| ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImg }}>
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
