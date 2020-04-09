const nx = require('@feizheng/next-js-core2');
require('../src/next-where');

describe('api.basic test', () => {
  test('next-each', function () {
    var arr1 = [
      {
        id: 67,
        userId: 'EB1347950628',
        goods: {
          type: 1,
          country: 'Panama',
          year: 2014,
          keywords: 'tes',
          field: null,
          infoNumber: 262,
          title: '数据查询(Panama2014)',
          price: 0.02
        },
        title: '数据查询(Panama2014)'
      },
      {
        id: 68,
        userId: 'EB1347950628-2',
        goods: {
          type: 1,
          country: 'Panama',
          year: 2014,
          keywords: 'tes',
          field: null,
          infoNumber: 262,
          title: '数据查询(Panama2014)',
          price: 0.01
        },
        title: '数据查询(Panama2014)'
      },
      {
        id: 69,
        userId: 'EB1347950628',
        goods: {
          type: 2,
          country: 'Panama',
          year: 2015,
          keywords: 'test',
          field: null,
          infoNumber: 780,
          title: '数据查询(Panama2015)',
          price: 0.01
        },
        title: '数据查询(Panama2015)'
      }
    ];

    var res1 = nx.where(arr1, {
      'goods.type': 1
    });

    var res2 = nx.where(arr1, {
      'goods.price': 0.02
    });

    expect(res1.length).toBe(2);
    expect(res2.length).toBe(1);
  });
});
