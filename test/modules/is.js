if (typeof T === 'undefined') require('../setup');

T('isInteger, isNegative, isZero', function () {

  function t(actual) {
    T.assert(actual);
  }

  Decimal.config({
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21
  });

  var n = new Decimal(1);

  t(!n.isNegative());
  t(!n.isZero());
  t(n.isInteger());
  t(n.equals(n));
  t(n.equals(1));
  t(n.equals('1.0'));
  t(n.equals('1.00'));
  t(n.equals('1.000'));
  t(n.equals('1.0000'));
  t(n.equals('1.00000'));
  t(n.equals('1.000000'));
  t(n.equals(new Decimal(1)));
  t(n.greaterThan(0.99999));
  t(!n.greaterThanOrEqualTo(1.1));
  t(n.lessThan(1.001));
  t(n.lessThanOrEqualTo(2));
  t(n.toString() === n.valueOf());

  n = new Decimal('-0.1');

  t(n.isNeg());
  t(!n.isZero());
  t(!n.isInt());
  t(!n.equals(0.1));
  t(!n.greaterThan(-0.1));
  t(n.greaterThanOrEqualTo(-1));
  t(n.lessThan(-0.01));
  t(!n.lessThanOrEqualTo(-1));
  t(n.toString() === n.valueOf());

  n = new Decimal('0.0000000');

  t(!n.isNegative());
  t(n.isZero());
  t(n.isInteger());
  t(n.eq(-0));
  t(n.gt(-0.000001));
  t(!n.gte(0.1));
  t(n.lt(0.0001));
  t(n.lte(-0));
  t(n.toString() === n.valueOf());

  n = new Decimal(-0);

  t(!n.isNeg());
  t(n.isZero());
  t(n.isInt());
  t(n.equals('0.000'));
  t(n.greaterThan(-1));
  t(!n.greaterThanOrEqualTo(0.1));
  t(!n.lessThan(0));
  t(!n.lessThan(0, 36));
  t(n.lessThan(0.1));
  t(n.lessThanOrEqualTo(0));
  t(n.valueOf() === '0' && n.toString() === '0');

  n = new Decimal('-1.234e+2');

  t(n.isNeg());
  t(!n.isZero());
  t(!n.isInt());
  t(n.eq(-123.4));
  t(n.gte('-1.234e+3'));
  t(n.lt(-123.39999));
  t(n.lte('-123.4e+0'));
  t(n.toString() === n.valueOf());

  n = new Decimal('5e-200');

  t(!n.isNegative());
  t(!n.isZero());
  t(!n.isInteger());
  t(n.equals(5e-200));
  t(n.greaterThan(5e-201));
  t(!n.greaterThanOrEqualTo(1));
  t(n.lessThan(6e-200));
  t(n.lessThanOrEqualTo(5.1e-200));
  t(n.toString() === n.valueOf());

  n = new Decimal('1');

  t(n.equals(n));
  t(n.equals(n.toString()));
  t(n.equals(n.toString()));
  t(n.equals(n.valueOf()));
  t(n.equals(n.toFixed()));
  t(n.equals(1));
  t(n.equals('1e+0'));
  t(!n.equals(-1));
  t(!n.equals(0.1));

  t(!new Decimal(0.1).equals(0));
  t(!new Decimal(1e9 + 1).equals(1e9));
  t(!new Decimal(1e9 - 1).equals(1e9));
  t(new Decimal(1e9 + 1).equals(1e9 + 1));
  t(new Decimal(1).equals(1));
  t(!new Decimal(1).equals(-1));

  t(!new Decimal(10).greaterThan(10));
  t(!new Decimal(10).lessThan(10));
  t(!new Decimal(2).greaterThan(10));
  t(!new Decimal(10).lessThan(2));
  t(new Decimal(10).lessThanOrEqualTo(20));
  t(!new Decimal(10).greaterThanOrEqualTo(20));

  t(!new Decimal(1.23001e-2).lessThan(1.23e-2));
  t(new Decimal(1.23e-2).lt(1.23001e-2));
  t(!new Decimal(1e-2).lessThan(9.999999e-3));
  t(new Decimal(9.999999e-3).lt(1e-2));

  t(!new Decimal(1.23001e+2).lessThan(1.23e+2));
  t(new Decimal(1.23e+2).lt(1.23001e+2));
  t(new Decimal(9.999999e+2).lessThan(1e+3));
  t(!new Decimal(1e+3).lt(9.9999999e+2));

  t(!new Decimal(1.23001e-2).lessThanOrEqualTo(1.23e-2));
  t(new Decimal(1.23e-2).lte(1.23001e-2));
  t(!new Decimal(1e-2).lessThanOrEqualTo(9.999999e-3));
  t(new Decimal(9.999999e-3).lte(1e-2));

  t(!new Decimal(1.23001e+2).lessThanOrEqualTo(1.23e+2));
  t(new Decimal(1.23e+2).lte(1.23001e+2));
  t(new Decimal(9.999999e+2).lessThanOrEqualTo(1e+3));
  t(!new Decimal(1e+3).lte(9.9999999e+2));

  t(new Decimal(1.23001e-2).greaterThan(1.23e-2));
  t(!new Decimal(1.23e-2).gt(1.23001e-2));
  t(new Decimal(1e-2).greaterThan(9.999999e-3));
  t(!new Decimal(9.999999e-3).gt(1e-2));

  t(new Decimal(1.23001e+2).greaterThan(1.23e+2));
  t(!new Decimal(1.23e+2).gt(1.23001e+2));
  t(!new Decimal(9.999999e+2).greaterThan(1e+3));
  t(new Decimal(1e+3).gt(9.9999999e+2));

  t(new Decimal(1.23001e-2).greaterThanOrEqualTo(1.23e-2));
  t(!new Decimal(1.23e-2).gte(1.23001e-2));
  t(new Decimal(1e-2).greaterThanOrEqualTo(9.999999e-3));
  t(!new Decimal(9.999999e-3).gte(1e-2));

  t(new Decimal(1.23001e+2).greaterThanOrEqualTo(1.23e+2));
  t(!new Decimal(1.23e+2).gte(1.23001e+2));
  t(!new Decimal(9.999999e+2).greaterThanOrEqualTo(1e+3));
  t(new Decimal(1e+3).gte(9.9999999e+2));

  t(!new Decimal('1.0000000000000000000001').isInteger());
  t(!new Decimal('0.999999999999999999999').isInteger());
  t(new Decimal('4e4').isInteger());
  t(new Decimal('-4e4').isInteger());
});
