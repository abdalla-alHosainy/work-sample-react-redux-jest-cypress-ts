import React from 'react';
import { shallow } from 'enzyme';
import { findByTest } from '../../../utils';
import Cards from './cards'

describe('Just The first test', () => {
   let component
   beforeEach(() => {
      component = shallow(<Cards />)
   })
   it('should Run smoothly', () => {
      const item = findByTest(component, 'testing')
      expect(item.length).toBe(1)
   })
})