/* eslint-disable no-unused-vars */
import { loadPages, loadSlugPages } from '../api/load-pages';
import Home from '../templates/Home';
import P from 'prop-types';
// qualquer coisa depois do / ele cai aqui nessa rota [slug].jsx

// aqui peguei {data} do 'getStaticProps'
export default function Page({ data }) {
  return <Home data={data} />;
}

Page.propTypes = {
  data: P.array,
};

// return desse 'getStaticPaths' cai ali no ctx do 'getStaticProps', como: params{slug: 'slug'} e a slug
export const getStaticPaths = async () => {
  const paths = await loadSlugPages();

  return {
    paths,
    fallback: false,
  };
};

// 'getStaticProps' return props que tem data
export const getStaticProps = async (ctx) => {
  let data = null;

  try {
    data = await loadPages(ctx.params.slug);
  } catch (error) {
    console.error(error);
  }

  if (!data) {
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
