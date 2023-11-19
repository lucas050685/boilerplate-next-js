import { example } from './example';

export type ExampleParams = {
  a: number;
  b: number;
};

export function useExample({ a, b }: ExampleParams) {
  return {
    data: example(a, b),
  };
}
