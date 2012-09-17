if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return _.indexOf(arr,item); 
    },

    sum : function(arr) {
      return _.reduce(arr,function(memo,num){ return memo+num;},0);
    },

    remove : function(arr, item) {
      return _.without(arr,item);
    },
    
    removeWithoutCopy : function(arr, item) {
      //arr = _.without(arr,item);
      for(var i=0;i<arr.length;i++){
        if(arr[i]==item){
          arr.splice(i,1);
        }
      }
      //console.log(arr);
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index,0,item);
      return arr; 
    },

    count : function(arr, item) {
      return _.filter(arr,function(num){ return num==item; }).length;
      //console.log(result);
      //return result;
    },

    duplicates : function(arr) {
      var arrsort = arr.sort(),
      arrresult= new Array;

      for(var i=0; i<arr.length; i++){
        if(arrsort[i+1]<arr.length){
          if(arrsort[i]==arrsort[i+1]){
            arrresult.push(arrsort[i]);
          } 
        }
        //console.log(i);
      }
      //console.log(arrresult);
      return arrresult;
    },

    square : function(arr) {
      return _.map(arr,function(num){ return Math.pow(num,2)});
    },

    findAllOccurrences : function(arr, target) {
      //console.log(target);
      //console.log(arr);
      var counter = 0,
      result = 0,
      result = new Array;
      for(var i=0;i<arr.length;i++){
        if(arr[i]==target){
          result[counter]=i;
          counter++;
        }
      }
      //console.log(result);
      return result;
    }
  };
});
