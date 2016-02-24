if (typeof T === 'undefined') require('../setup');

T('ceil', function () {

  function t(expected, n) {
    T.assertEqual(expected, new Decimal(n).ceil().valueOf());
  }

  Decimal.config({
    precision: 20,
    rounding: 4,
    toExpNeg: -100,
    toExpPos: 100
  });

  t('0', 0);
  t('0', -0);
  t('1', 0.1);
  t('1', '0.4999999999999999');
  t('1', 0.5);
  t('1', 0.7);
  t('0', -0.1);
  t('0', '-0.4999999999999999');
  t('0', -0.5);
  t('0', -0.7);
  t('1', 1);
  t('2', 1.1);
  t('2', 1.5);
  t('2', 1.7);
  t('-1', -1);
  t('-1', -1.1);
  t('-1', -1.5);
  t('-1', -1.7);

  t('0', '-0.999');
  t('2', '1.0000000000000000001');
  t('2', '1.0000000000000000000000000000000000000000000000000000000000000000000000000000001');
  t('1', '1e-9000000000000000');
  t('0', '-1e-9000000000000000');
  t('0', '-9.9e-9000000000000001');
  t('9.999999e+9000000000000000', '9.999999e+9000000000000000');
  t('-9.999999e+9000000000000000', '-9.999999e+9000000000000000');
  t('5.5879983320336874473209567979e+287894365', '5.5879983320336874473209567979e+287894365');
  t('-5.5879983320336874473209567979e+287894365', '-5.5879983320336874473209567979e+287894365');

  t('-2075364', '-2075364.364286541923');
  t('60593539780450631', '60593539780450631');
  t('65937898671515', '65937898671515');
  t('-39719494751819198566798', '-39719494751819198566798.578');
  t('92627382695288166557', '92627382695288166556.8683774524284866028260448205069');
  t('-881574', '-881574');
  t('-3633239209', '-3633239209.654526163275621746013315304191073405508491056');
  t('321978830777554620127500540', '321978830777554620127500539.339278568133088682532238002577');
  t('2074', '2073.532654804291079327244387978249477171032485250998396');
  t('677676305592', '677676305591.2');
  t('1', '0.0000000000006');
  t('39181479479778357', '39181479479778357');
  t('1', '0.00000000000000000087964700066672916651');
  t('896', '896');
  t('115083055948552475', '115083055948552475');
  t('9105942082143427451223', '9105942082143427451223');
  t('276312604693909858428', '276312604693909858427.21965306055697011390137926559');
  t('1', '0.0000252');
});
