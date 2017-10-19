const defaultState = () => ({
  data: [{
    key: '0',
    id: '0',
    name: 'foo',
    age: '11',
    description: 'some foo',
  }],
});

export default (state = defaultState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
