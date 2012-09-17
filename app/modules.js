if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      console.log(str1);
      console.log(str2);
      //return amdefine.sayIt(str1,str2);
      //return module.sayIt(str1,str2);
    }
  };
});

