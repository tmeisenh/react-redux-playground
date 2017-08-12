import chai from 'chai';
import { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { api } from './greeting';

chai.use(chaiAsPromised);

describe('greeting', () => {
  it('returns greeting after awhile', () => expect(api.greeting()).to.become('Hello world!'));
});
