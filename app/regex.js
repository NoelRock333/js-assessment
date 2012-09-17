if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      var reg = new RegExp(/[0-9]/);
      return reg.test(str);
    },

    containsRepeatingLetter : function(str) {
      //var reg = new RegExp(/(.)\1*/g,"$1");
      ////console.log(reg.test(str));
      //console.log(str);
      //console.log(reg.test(str));
      //return reg.test(str);
    },

    endsWithVowel : function(str) {
      var reg = new RegExp(/[aeiouAEIOU]$/);
      return reg.test(str);
    },

    captureThreeNumbers : function(str) {
      //console.log(str);
      //console.log(str.match(/\d{3}/));
      return str.match(/\d{3}/);
    },

    matchesPattern : function(str) {
      var reg = new RegExp(/^\d{3}\-\d{3}\-\d{4}$/);
      return reg.test(str);
    },
    isUSD : function(str) {
      //var reg = RegExp(/^(\d+).*?(\d+).*?(\d+)/);
      //console.log(reg.exec(str));
      //var reg = RegExp(/^($)\d{1}+\.\\d{2});
    }
  };
});
