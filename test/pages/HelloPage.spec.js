import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import HelloPage from '../../src/pages/HelloPage';

describe('HelloPage', () => {
  let helloPage;

  describe('#render', () => {
    beforeEach(() => {
      helloPage = mount(<HelloPage message="World"/>);
    });

    it('should render a hello world message', () => {
      expect(helloPage.text()).to.be.eq('Hello World');
    });
  });
});
