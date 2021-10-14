import React from 'react';
import { shallow } from 'enzyme';
import { findByTest } from '../../../utils';
import Cards from './cards'

describe('<Cards/>', () => {
   let component
   beforeEach(() => {
      component = shallow(<Cards />)
   })
   it('should Run smoothly', () => {
      // const item = findByTest(component, 'cards-container')
      // expect(item.length).toBe(1)
   })
})