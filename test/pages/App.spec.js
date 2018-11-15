import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/pages/App';
import HomePage from '../../src/pages/HomePage';
import HelloPage from '../../src/pages/HelloPage';

describe('App', () => {
  let app;

  describe('#render HomePage', () => {
    beforeEach(() => {
      app = mount(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
    });

    it('should only render HomePage', () => {
      expect(app.find(HomePage)).to.have.lengthOf(1);
      expect(app.find(HelloPage)).to.have.lengthOf(0);
    });
  });

  describe('#render HelloPage', () => {
    beforeEach(() => {
      app = mount(<MemoryRouter initialEntries={['/hello']}><App /></MemoryRouter>);
    });

    it('should only render HomePage', () => {
      expect(app.find(HomePage)).to.have.lengthOf(0);
      expect(app.find(HelloPage)).to.have.lengthOf(1);
    });
  });
});
