/*!
 * name: @feizheng/next-where
 * description: Get collection items from condition map.
 * url: https://github.com/afeiship/next-where
 * version: 1.0.0
 * date: 2020-04-09 15:20:14
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.where = function (inArray, inMap) {
    var pairs = nx.map(inMap, function (key, value) {
      return { key: key, value: value };
    });

    return inArray.filter(function (item) {
      var equals = pairs.filter(function (pair) {
        return nx.get(item, pair.key) === pair.value;
      });

      return equals.length == pairs.length;
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.where;
  }
})();

//# sourceMappingURL=next-where.js.map
