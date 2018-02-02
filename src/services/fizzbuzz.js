import _ from 'lodash';
import fp from 'lodash/fp';

const fizzer = text => (Number.parseInt(text, 10) % 3 === 0 ? 'Fizz' : '');
const buzzer = text => (Number.parseInt(text, 10) % 5 === 0 ? 'Buzz' : '');

const printText = text => _.join([fizzer(text), buzzer(text)], '');

const fizzBuzz = fp.cond([
  [fp.gte(1), fp.constant('')],
  [fp.T, printText],
]);

export default fizzBuzz;
