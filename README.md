# next-where
> Get collection items from condition map.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-where
```

## usage
```js
import '@jswork/next-where';

const data = [
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


// filter by map condition
nx.where(data, { id: 67 });

// result
[
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
  }
]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-where/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-where
[version-url]: https://npmjs.org/package/@jswork/next-where

[license-image]: https://img.shields.io/npm/l/@jswork/next-where
[license-url]: https://github.com/afeiship/next-where/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-where
[size-url]: https://github.com/afeiship/next-where/blob/master/dist/next-where.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-where
[download-url]: https://www.npmjs.com/package/@jswork/next-where
