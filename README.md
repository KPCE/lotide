# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kpce/lotide`

**Require it:**

`const _ = require('@kpce/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: used for asserting that two arrays are equal, returns colourful response
* `assertEqual(...)`: provides colourful response when asserting two things are equal, works for strings/numbers only
* `assertObjectsEqual(...)`: used for asserting that two objects are equal, returns colourful response
* `countLetters(...)`: returns a count of each character passed as string
* `countOnly(...)`: returns a count of only the characters you specify when passed a string
* `eqArrays(...)`: function to determine if two arrays are equal
* `eqObjects(...)`: function to determine if two objects are equal
* `findKey(...)`: return the key of the first value to match the callback
* `head(...)`: return the first value of an array
* `letterPositions(...)`: take in sentance, return object whose keys are the letters (without spaces)
* `map(...)`: take array and callback, runs the callback on each item in the array and returns a new array
* `middle(...)`: returns an array of just the middle value/s of a provided array
* `pigLatin(...)`: translates strings to pig-latin
* `reverse(...)`: returns an array where each string in input array is reversed in a new array output
* `tail(...)`: returns an array without the first value
* `takeUntil(...)`: keep collecting items from a provided array until the callback provided returns a truthy value; returns substring of string based on where you want to cut off
* `without(...)`: takes an two arrays, where one is the original and the other is an array of terms you want removed, returns new array without the terms specified
