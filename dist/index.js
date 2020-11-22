/*!
 * name: @jswork/next-where
 * description: Get collection items from condition map.
 * homepage: https://github.com/afeiship/next-where
 * version: 1.0.0
 * date: 2020-11-22 13:41:41
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

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
