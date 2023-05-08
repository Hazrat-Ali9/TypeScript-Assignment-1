const reverseArray = <T>(...args: T[]): T[] => {
  return args.reverse();
};

console.log(reverseArray<string>("e", "d", "c", "b", "a"));

