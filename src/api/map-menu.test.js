import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  //dados mapeados e testados aqui em baixo
  //esta parte é navLinks / logolink/ menulink
  it('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      logo_link: '#home',
      logo_text: 'Logo',
      logo: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
      menu_links: [
        {
          link_text: 'intro',
          url: '#intro',
          open_in_new_tab: false,
        },
        {
          link_text: 'grid-one',
          url: '#grid-one',
          open_in_new_tab: false,
        },
      ],
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Logo');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('intro');
    expect(menu.links[0].link).toBe('#intro');
  });

  it('should retorn an empty array if no link', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if links passed', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'intro',
        url: '#intro',
      },
      {},
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('intro');
    expect(links[0].link).toBe('#intro');
  });
});
