if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(arr[0],arr[1],arr[2]);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      //console.log(str);
      function regresa(callback){
        var saludo = str+", world";
        return callback(saludo);
      }
      
      function trae(result){
        //console.log(result);
      }

      return regresa(trae);

    },

    makeClosures : function(arr, fn) {
      //fn(arr);
      //return fn;
      //return _.map(arr,function(num){ return fn(num);});
    },

    partial : function(fn, str1, str2) {
      var partial = fn.bind(null,str1,str2);
      return partial;
    },

    useArguments : function() {
      for(var i=0, result=0,j=arguments.length;i<j;i++){
        result +=arguments[i];
      }
      return result;
    },

    callIt : function(fn) {
      //return fn.apply(this,arguments);
    },

    curryIt : function(fn) {

    }
  };
});
