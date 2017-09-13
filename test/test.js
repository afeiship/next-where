var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-where');

describe('next/where', function () {

  it('next-each', function () {
    var arr1 = [
      {
        "id": 67,
        "userId": "EB1347950628",
        "goods": {
          "type": 1,
          "country": "Panama",
          "year": 2014,
          "keywords": "tes",
          "field": null,
          "infoNumber": 262,
          "title": "数据查询(Panama2014)",
          "price": 0.02
        },
        "title": "数据查询(Panama2014)"
      },
      {
        "id": 67,
        "userId": "EB1347950628-2",
        "goods": {
          "type": 1,
          "country": "Panama",
          "year": 2014,
          "keywords": "tes",
          "field": null,
          "infoNumber": 262,
          "title": "数据查询(Panama2014)",
          "price": 0.01
        },
        "title": "数据查询(Panama2014)"
      },
      {
        "id": 76,
        "userId": "EB1347950628",
        "goods": {
          "type": 1,
          "country": "Panama",
          "year": 2015,
          "keywords": "test",
          "field": null,
          "infoNumber": 780,
          "title": "数据查询(Panama2015)",
          "price": 0.01
        },
        "title": "数据查询(Panama2015)"
      }
    ];

    var result = nx.where(arr1,{
      id : 67
    });

    var result2 = nx.where(arr1,{
      id:67,
      'goods.price':0.02
    });

    assert.equal( result.length, 2);
    assert.equal( result2.length, 1);

  });

});
