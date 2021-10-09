import React from 'react';
import { mount } from 'enzyme';
import { findByTest } from '../utils';
import App from './App'
describe('<App />', () => {
   let component
   beforeEach(() => {
      component = mount(<App />)
   })
   it('should render the app ', () => {
      const app = findByTest(component, 'app')
      console.log(app.debug());
      expect(app.length).toBe(1)
   })
   it('should render the sidebar ', () => {
      const sidebar = findByTest(component, 'sidebar')
      // console.log(sidebar.debug());
      expect(sidebar.length).toBe(1)
   })
   it('should render the Buttons ', () => {
      const homeButton = findByTest(component, 'home-btn')
      const cardsButton = findByTest(component, 'cards-btn')
      const ganttButton = findByTest(component, 'gantt-btn')
      const chartsButton = findByTest(component, 'charts-btn')
      const githubButton = findByTest(component, 'github-btn')
      expect(homeButton.length).toBe(1)
      expect(cardsButton.length).toBe(1)
      expect(ganttButton.length).toBe(1)
      expect(chartsButton.length).toBe(1)
      expect(githubButton.length).toBe(1)
   })

})

