import { example } from './example';

describe('Example test', () => {
  it('Should sum two numbers', () => {
    const a = 1;
    const b = 2;

    const c = example(a, b);

    expect(c).toBe(3);
  });
});
