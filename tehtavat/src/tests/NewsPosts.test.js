import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { NewsContainer } from '../tehtava3/NewsContainer';
import { NewsPost } from '../tehtava3/NewsPost';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('NewsContainer contains NewsPosts', () => {
  const posts = [
    { headline: 'otsikko1', isNew: false, textContent: 'Tekstikenttä1' },
    { headline: 'otsikko2', isNew: false, textContent: 'Tekstikenttä2' },
    { headline: 'otsikko3', isNew: true, textContent: 'Tekstikenttä3' },
  ]
  const wrapper = shallow(<NewsContainer newsPosts={posts} />);
  expect(wrapper.find(NewsPost).length).toBe(3);
});

test('NewsPosts contains news data', () => {
  const posts = [
    { headline: 'otsikko1', isNew: false, textContent: 'Tekstikenttä1' },
    { headline: 'otsikko2', isNew: false, textContent: 'Tekstikenttä2' },
    { headline: 'otsikko3', isNew: true, textContent: 'Tekstikenttä3' },
  ]
  const wrapper = mount(<NewsContainer newsPosts={posts} />);
  const newsPosts = wrapper.find(NewsPost);

  posts.forEach(post => {
    const match = newsPosts.filterWhere(x =>
      x.findWhere(y => y.text().includes(post.headline))
      && x.findWhere(y => y.text().includes(post.textContent)));
    expect(match.exists()).toBeTruthy();
  });
  const badges = newsPosts.findWhere(x => x.hasClass('badge'));
  expect(badges.length === posts.filter(x => x.isNew).length).toBeTruthy();
});


test('NewsPost is a jumbotron', () => {
  const wrapper = shallow(<NewsPost headline='' isNew={true} textContent='' />);
  expect(wrapper.hasClass('jumbotron')).toBeTruthy();
});
