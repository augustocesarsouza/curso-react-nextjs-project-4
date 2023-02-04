/* eslint-disable no-unused-vars */
import P from 'prop-types';

import { loadPages } from '../api/load-pages';
import config from '../config';
import Home from '../templates/Home';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  const data = await loadPages(config.defaultSlug);
  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
