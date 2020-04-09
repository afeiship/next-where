# next-where
> Get collection items from condition map.

## installation
```bash
npm install -S @feizheng/next-where
```

## usage
```js
import '@feizheng/next-where';

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
