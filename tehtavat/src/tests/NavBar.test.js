import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../App';
import { NavBar } from '../tehtava1/NavBar';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('App contains NavBar', () => {
  const wrapper = shallow(<App />);
  const navBar = wrapper.find(NavBar);
  expect(navBar.length).toBe(1);
});

test('NavBar has navbar class', () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper.hasClass('navbar')).toBeTruthy();
});

test('NavBar has navbar list of links (ul)', () => {
  const wrapper = shallow(<NavBar />);
  const ul = wrapper.find('ul');
  expect(ul.length > 0).toBeTruthy();
  expect(ul.hasClass('navbar-nav')).toBeTruthy();
});

test('NavBar has navbar list items of links (li)', () => {
  const wrapper = shallow(<NavBar />);
  const li = wrapper.find('ul').find('li');
  expect(li.length).toBe(4);
  li.forEach(listItem =>
    expect(listItem.hasClass('nav-item')).toBeTruthy() &&
    expect(listItem.find('a')).toBe(1)
  );
  const requiredLinks = ['#home', '#trending', '#homeland', '#sports'];
  requiredLinks.forEach(link => {
      expect(li.find('a').filterWhere(x => x.prop('href') === link).length).toBe(1);
    }
  );
});