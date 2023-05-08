# Interview Questions and Answers

## What is TypeScript, and how is it different from JavaScript?

TypeScript is a superset of JavaScript that adds optional static typing and class-based object-oriented programming to the language. The TypeScript compiler compiles TypeScript code into JavaScript code that runs in any browser.

## Can you explain the difference between "interface" and "type" in TypeScript?

An interface is a virtual structure that only exists within the context of TypeScript. It's used to describe the shape of an object and is often used in scenarios where the shape of an object is known ahead of time, such as when defining the shape of an object as a function parameter.

## Can you give an example of how to use generics in TypeScript?

Generics are used to create reusable components. They allow you to write code that can be used with multiple types and still maintain type safety. For example, you can create a generic function that takes an array of any type and returns an array of the same type.

const reverseArray = <T>(...args: T[]): T[] => {
return args.reverse();
};

console.log(reverseArray<string>("e", "d", "c", "b", "a"));

## What is the difference between an "unknown" and "any" type in TypeScript?

The "unknown" type is a type-safe version of the "any" type. It's used to represent values that are not known at compile time, such as values that are returned from a function or values that are passed to a function as arguments.

## Can you give an example of how to use enums in TypeScript?

Enums are used to define a set of named constants. They can be used to represent a set of related values, such as the days of the week or the months of the year.

enum Days {
Sunday,
Monday,
Tuesday,
Wednesday,
Thursday,
Friday,
Saturday,
}

## What is the "as" keyword used for in TypeScript?

The "as" keyword is used to cast a value to a specific type. It's often used in scenarios where TypeScript can't infer the type of a value, such as when using the "any" type.

## Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

Type guards are used to narrow down the type of a value. They're often used in scenarios where TypeScript can't infer the type of a value, such as when using the "any" type.


# Optional Questions

## Can you explain what a "tuple" is in TypeScript?

A tuple is a type that represents a fixed-length array where each element has a specific type. For example, a tuple of type [string, number] represents an array with two elements: the first element is a string and the second element is a number.

## Can you give an example of how to use "readonly" properties in TypeScript?

if you cant assign the value then you can use readonly

## Can you give an example of how to use "conditional types" in TypeScript?

Conditional types are used to define types that depend on other types. They're often used in scenarios where TypeScript can't infer the type of a value, such as when using the "any" type.
