// recebe o objeto, usa 'destructuring' para trocar os nomes, e retorn novo valor
export const mapMenu = (menu = {}) => {
  //LogoLink
  const { open_in_new_tab: newTab = false, logo_text: text = '', logo_link: link = '', menu_links: links = [] } = menu;

  const srcImg = menu?.logo?.data?.attributes?.url || '';

  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

//valores de NavLinks emvia para "MenuLink"
export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const { link_text: children = '', url: link = '', open_in_new_tab: newTab = '' } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
