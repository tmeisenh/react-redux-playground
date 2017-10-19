import _ from 'lodash';

const buildData = () => {
  const factory = i => ({
    key: `${i}`,
    id: `${i}`,
    name: 'foo',
    age: '11',
    description: 'some foo',
  });

  const data = [];
  _.times(10, i => (data.push(factory(i))));
  return data;
};

const defaultState = () => ({
  data: buildData(),
});

export default (state = defaultState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
