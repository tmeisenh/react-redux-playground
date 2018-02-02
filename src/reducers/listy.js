import _ from 'lodash';

const isPrime = (number) => {
  if (number <= 2) {
    return false;
  }

  const range = _.range(0, number);
  const bar = range.filter(x => number % x === 0);
  return bar.length < 2;
};

const manyPrimes = () => {
  const range = _.range(0, 20);
  return range.reduce((acc, cur) => {
    const prime = isPrime(cur);
    return prime ? [cur, ...acc] : acc;
  }, []);
};

const buildData = () => {
  const factory = i => ({
    key: i,
    id: i,
    name: 'foo',
    age: i,
    description: 'some foo',
  });

  const lotsOfPrimes = manyPrimes();
  return lotsOfPrimes.map(x => factory(x));
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
