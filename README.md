# reactHooks
Example of all the react hooks 
what is react hooks :- https://www.freecodecamp.org/news/react-hooks-fundamentals/
                      https://medium.com/@AbidKazmi/all-react-hooks-in-one-short-4b0ed4b5a6e4

useState Hooks :- https://medium.com/@titoadeoye/react-hooks-usestate-with-practical-examples-64abd6df6471


USEEFFECT HOOKS 
https://thehumblecoder.medium.com/understanding-the-useeffect-hook-in-react-js-f356712bd44e
useEffect Hooks :- The useEffect hook allows you to perform side effects in a functional component. Side effects include things like fetching data from an API, updating the DOM, or subscribing to an event.
useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>) OR 
useEffect(() => {
    // Side effect logic goes here
    return () => {
         // Cleanup logic (optional)
  };
}, [dependencies]);

📌 Why Use It?
Used when a component needs to perform side effects like:
Fetching data from an API.
Subscribing to events or timers.
Updating the document title or interacting with the DOM.
⚙️ How It Works?
Runs after the component renders.
Can run:
Every render (no dependencies).
Only on mount ([] as dependency).
When dependencies change ([dependency]).
Cleanup function prevents memory leaks.


USEREF HOOKS :-  https://medium.com/zestgeek/understanding-the-useref-hook-in-react-real-life-examples-98339ab7f768

USEMEMO HOOks
https://www.freecodecamp.org/news/how-to-work-with-usememo-in-react/
https://www.geeksforgeeks.org/react-js-usememo-hook/

The useMemo Hook is a built-in React Hook that helps optimize performance by memoizing the result of a computation and reusing it unless its dependencies change

How it works
Pass a function that performs the computation to memoize as the first parameter 
Pass an array of all dependencies for that memoization as the second argument 
If none of the dependencies have changed, useMemo will return the value that was already calculated 

When to Use useMemo?
You should use useMemo when
You have expensive calculations that do not need to be re-executed unless certain dependencies change.
You are dealing with large data sets and need to optimize performance.
You want to prevent unnecessary re-renders of child components by ensuring stable references.

Syntax
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
The first argument is a function that returns the computed value.
The second argument is an array of dependencies. When any of these dependencies change, the function gets re-evaluated.


In simple terms, useMemo is like having a smart assistant who remembers the answers to math problems, so you don't have to solve them again and again.