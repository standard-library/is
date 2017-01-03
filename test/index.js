const test = require("tape");
const is = require("../");

test('test is', function (t) {
  t.equal(is(1, 2), false);
  t.equal(is(NaN, NaN), true);
  t.equal(is("A", "A"), true);
  t.equal([true, true, true, true].reduce(is, true), true)
  t.equal([true, true, true, false].reduce(is, true), false)
  t.end();
});
