import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import HomePage from '../../src/pages/HomePage';

describe('HomePage', () => {
  let homePage;

  describe('#render', () => {
    beforeEach(() => {
      homePage = shallow(<HomePage />);
    });

    it('should render two links', () => {
      expect(homePage.find(Link)).to.have.lengthOf(2);
    });
  });
});
