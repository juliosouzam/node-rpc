const a = [1, 2, 3, 4, 5] as const;
const b = [1, 2, 3, 4, 5] as const;

type IndexOf<
  T extends [],
  S extends number[] = []
> = T['length'] extends S['length']
  ? S[number]
  : IndexOf<T, [S['length'], ...S]>;

a.map((_, i: IndexOf<typeof a>) => {
  const c = b[i];
  console.log(c.toExponential(100));
});

// import { handlers } from './handler.json';

// type Handler = typeof handlers;

// export function useContext<K extends keyof Handler>(key: K): Handler[K] {
//   const defaultValue = handlers[key];

//   return defaultValue;
// }
