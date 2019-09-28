import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { SnippetContainer } from '../tehtava4/SnippetContainer';
import { NewsSnippet } from '../tehtava4/NewsSnippet';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('SnippetContainer contains NewsSnippets', () => {
  const posts = [
    { headline: 'otsikko1', textContent: 'Tekstikenttä1', readMoreUrl: 'www.google.com', time: '01.12.2019' },
    { headline: 'otsikko2', textContent: 'Tekstikenttä2', readMoreUrl: 'www.google.com', time: '01.12.2019' },
    { headline: 'otsikko3', textContent: 'Tekstikenttä3', readMoreUrl: 'www.google.com', time: '01.12.2019' },
  ]
  const wrapper = shallow(<SnippetContainer newsSnippets={posts} />);
  expect(wrapper.find(NewsSnippet).length).toBe(3);
});

test('NewsSnippet is a card', () => {
  const data = {headline: 'otsikko1', textContent: 'teksti1', readMoreUrl: 'google.fi', time: '1234567'};
  const wrapper = shallow(<NewsSnippet headline={data.headline} textContent={data.textContent} readMoreUrl={data.readMoreUrl} time={data.time} />);
  expect(wrapper.hasClass('card')).toBeTruthy();
});

test('NewsSnippet displays headline in a card header', () => {
  const data = {headline: 'otsikko1', textContent: 'teksti1', readMoreUrl: 'google.fi', time: '1234567'};
  const wrapper = mount(<NewsSnippet headline={data.headline} textContent={data.textContent} readMoreUrl={data.readMoreUrl} time={data.time} />);
  const header = wrapper.findWhere(x => x.hasClass('card-header'));
  expect(header.length).toBe(1);
  expect(header.findWhere(x => x.text().includes(data.time)).exists()).toBeTruthy();
});

test('NewsSnippet displays other data in card body', () => {
  const data = {headline: 'otsikko1', textContent: 'teksti1', readMoreUrl: 'google.fi', time: '1234567'};
  const wrapper = mount(<NewsSnippet headline={data.headline} textContent={data.textContent} readMoreUrl={data.readMoreUrl} time={data.time} />);
  const body = wrapper.findWhere(x => x.hasClass('card-body'));
  expect(body.length).toBe(1);

  const title = body.findWhere(x => x.hasClass('card-title'));
  expect(title.length).toBe(1);
  expect(title.findWhere(x => x.text().includes(data.headline)).exists()).toBeTruthy();

  const text = body.findWhere(x => x.hasClass('card-text'));
  expect(text.length).toBe(1);
  expect(text.findWhere(x => x.text().includes(data.textContent)).exists()).toBeTruthy();
  
  const button = body.findWhere(x => x.hasClass('btn'));
  expect(button.length).toBe(1);
  expect(button.findWhere(x => x.prop('href') === data.readMoreUrl).exists()).toBeTruthy();
});