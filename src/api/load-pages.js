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

  const data = mapData([attributes])[0];
  return data;
};
