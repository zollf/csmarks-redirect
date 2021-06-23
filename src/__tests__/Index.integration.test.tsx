import React from 'react';
import { RenderResult, render } from '@testing-library/react';

import Index from '@/pages/index';

const component = <Index />;

describe('<Index />', () => {
  let wrapper!: RenderResult;
  beforeEach(() => {
    wrapper = render(component);
  });

  it('matches its snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
