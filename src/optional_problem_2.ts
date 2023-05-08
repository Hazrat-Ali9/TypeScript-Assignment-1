const isString = (param: unknown): param is string => {
  return typeof param === "string";
};

const logString = (param: unknown) => {
  if (isString(param)) {
    console.log(param);
  } else {
    throw new Error("Parameter is not a string");
  }

  type StringOrNumber<T> = T extends string ? string : number;

  interface Person {
    name: string;
    age: StringOrNumber<number>;
  }

  const person: Person = {
    name: "John Doe",
    age: 42,
  };

  console.log(person);
};
logString("Hello World");
logString(123);
