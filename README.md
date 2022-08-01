# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @at.yoshimatsu/lotide`

**Require it:**

`const _ = require('@at.yoshimatsu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: returns a boolean whether actual and expected are strictly equal.
* `eqArrays(arr1, arr2)`: returns a boolean whether arr1 and arr2 are equal arrays.
* `assertArraysEquarl(arr1, arr2)`: returns an assertion of eqArrays.
* `eqObjects(obj1, obj2)`: returns a boolean whether obj1 and obj2 are equal objects.
* `assertObjectsEquarl(obj1, obj2)`: returns an assertion of eqObjects.
* `countLetters(str)`: returns an object the keys are each letter of string and the values are how many letters are in the string.
* `countOnly(arr, obj)`: returns an object the keys are each item of arr and the values are how many item are in the arr. Given obj's keys are item you want to count and the value must be boolean.
* `findKey(obj, callback)`: takes in an object and a callback. It scans the object and return the first key which satisfies the callback. If no key with that given values are found, then it returns undefined.
* `findKeyByValue(obj, value)`: takes in an object and a value. It scans the object and return the first key which contains the given value. If no key with that given values are found, then it returns undefined.
* `flatten(arr)`: returns flattened arr.
* `head(arr)`: returns first element of the arr.
* `letterPositions(string)`: returns an object the keys are each letter of string and the values are an array of letters position.
* `map(arr, callback)`: returns a new array which elements are returned by the callback.
* `middle(arr)`: returns middle element(s) of given arr.
* `tail(arr)`: returns elements of given arr except first element.
* `takeUntile(arr, callback)`: returns elements of given arr untile satified the callback.
* `without(arr1, arr2)`: returns new array from arr1 excepting arr2 elements.
