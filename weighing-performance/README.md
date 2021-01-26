# Weighing Performance

This repo will serve as an area to experiment with some performance enhancement concepts in React. To keep it consistent, I am going to use the exact same tasks :

1. Data Fetching on load
2. Forms

I will do one version without any enhancements and then one with the enhancements identified for each concept to see how much is saved for each addition. Then I will try putting it all together and seeing if the React Dev Tools Profiler confirms what I believe

## Forms

Steps for Testing Times :

1. First Name - hello
2. Last Name - there
3. Submit

- Use State Example

Total time : 22.5ms

- Use Reducer Example

Total time : 19.3ms

- Callback State Example

Total time : 15.4ms

- Callback Reducer Example

Total time : 23.6ms

- Memo Example

Total time : 9.1

- Final Form

Total time : 15.4ms

## Data Fetching

Batching Set State

Total time : 5.4 ms

Set State with Object

Total time : 5.6 ms

Use Reducer Example

Total time : 6.2ms
