if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      console.log(constructor);
      console.log(greeting);

      return constructor(greeting); 
    },

    iterate : function(obj) {
      //for(var property in obj){
        //return property;
      //}
    }
  };
});
