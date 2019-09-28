import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Title } from '../tehtava2/Title';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('Title contains carousel', () => {
  const slogans = ['slog1', 'slog2', 'slog3'];
  const wrapper = shallow(<Title slogans={slogans} />);
  expect(wrapper.hasClass('carousel')).toBeTruthy();
});

test('Carousel contains carousel-inner', () => {
  const slogans = ['slog1', 'slog2', 'slog3'];
  const wrapper = shallow(<Title slogans={slogans} />);
  expect(wrapper.findWhere(x => x.hasClass('carousel-inner')).exists()).toBeTruthy();
});

test('Carousel-inner contains carousel-items', () => {
  const slogans = ['slog1', 'slog2', 'slog3'];
  const wrapper = shallow(<Title slogans={slogans} />);
  const carouselInner = wrapper.findWhere(x => x.hasClass('carousel-inner'));
  const carouselItems = carouselInner.findWhere(x => x.hasClass('carousel-item'));
  expect(carouselItems.length).toBe(3);
  slogans.forEach(x => 
    expect(carouselItems.findWhere(y => y.text().includes(x)).exists()).toBeTruthy()
  );
});