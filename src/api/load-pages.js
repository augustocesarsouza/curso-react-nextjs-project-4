import config from '../config';

import { mapData } from './map-data';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug ? `[slug]=${slug.replace(/[^a-z0-9-_]]/gi, '')}` : '';
  const url = `${config.url}${cleanSlug}${config.urlComplet}`;
  const raw = await fetch(url);
  const json = await raw.json();

  let attributes = {};

  if (json?.data?.length && slug.length > 0) {
    attributes = json.data[0].attributes;
  }
  // nao estou pegando mais o [0] aqui do retorna da função que retorna array de Objeto/ estou pegando la no "Home"
  const data = mapData([attributes]);
  return data;
};
