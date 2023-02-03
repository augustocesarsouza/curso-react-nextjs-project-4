import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

/* eslint-disable no-unused-vars */
export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const { footer_text: footerHtml = '', slug = '', title = '', sections = [], menu = {} } = data;

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
