if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {
      if(a==true || b==true){
        return true;
      }
      else{
        return false;
      }
    },

    and : function(a, b) {
      if(a==true && b==true){
        return true;
      }
      else{
        return false;
      }
    }
  };
});
