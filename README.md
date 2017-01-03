# is

When `Object.is` is too many keystrokes.

## Installation

```shell
yarn add @standard-library/is
```

## Usage

Use anywhere you might otherwise want to check equality. Never again use the vastly inferior `===` and `==`. Also: functional.

```
const is = require("@standard-library/is");

is(1, 1);
// => true

is(1, 2);
// => false

[true, true, true, true].reduce(is, true);
// => true
```
