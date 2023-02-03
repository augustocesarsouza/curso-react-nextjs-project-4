/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/react';
import { GridImage } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridImage />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render', () => {
    const { container } = renderTheme(<GridImage {...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
