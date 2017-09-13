(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.where = function (inArray, inMap) {
    var result = [];
    var pairs = nx.map(inMap,function(key,value){
      return { key:key, value: value };
    });

    var eq = function(item){
      var equals = pairs.filter(function(pair){
        return nx.path(item,pair.key) === pair.value;
      });

      return equals.length == pairs.length;
    };

    nx.each( inArray, function(_, item){
      if(eq(item)){
        result.push(item);
      }
    });

    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.where;
  }

}());
