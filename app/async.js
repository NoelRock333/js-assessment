if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    },

    manipulateRemoteData : function(url) {
      return {
        then: function(callback){
          $.getJSON(url, function(data){
            var res = $.map(data.people,function(val,i){
              return val.name;
            });
            return callback(res.sort());
          });
        }
      };
    }
  };
});
