/* eslint-disable no-unused-vars */
import P from 'prop-types';

import { loadPages } from '../api/load-pages';
import config from '../config';
import Home from '../templates/Home';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  let data;

  try {
    data = await loadPages(config.defaultSlug);
  } catch (e) {
    console.error(e);
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
