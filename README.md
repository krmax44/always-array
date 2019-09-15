# Always Array

[![Build Status](https://travis-ci.com/krmax44/always-array.svg?branch=master)](https://travis-ci.com/krmax44/always-array)
[![bundle size](https://img.shields.io/bundlephobia/minzip/always-array)](https://bundlephobia.com/result?p=always-array)
[![install size](https://packagephobia.now.sh/badge?p=always-array)](https://packagephobia.now.sh/result?p=always-array)
[![npm version](https://img.shields.io/npm/v/always-array)](https://www.npmjs.com/package/always-array)

Ensures you are always dealing with an array. It uses `Array.isArray`.

## Installation

```bash
yarn add always-array
# or with npm
npm i always-array
```

## Usage

Very simple.

```js
import alwaysArray from 'always-array';

alwaysArray('foo'); // ['foo']
alwaysArray(['foo']); // ['foo']
```
