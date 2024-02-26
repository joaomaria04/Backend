var array = [1,2,3,4,5,6,7,8,9,10];

var arrayutils = {
    isEmpty: function(array) {
        if (array.length == 0) {
            return true;
        } else {
            return false;
        }
    },

    max: function(array) {
        var maximoArray = array[0];
        for (var i = 1; i < array.length; i++) {
        var numero = array[i];
        if (numero > maximoArray) {
            maximoArray = array[i];
        }   
    }
      return maximoArray;
    
    },

    min: function(array) {
        var minimoArray = array[0];
        for (var i = 1; i < array.length; i++) {
        var numero = array[i];
        if (numero < minimoArray) {
            minimoArray = array[i];
        }   
    }
      return minimoArray;
    
    },

    average: function(array) {
        var somaArray = 0
        for (let i = 0; i < array.length; i++) {
            var element = array[i];
            somaArray += element;            
        }
    var avg = somaArray / array.length;
    return avg;
    },

    indexOf: function (array, value) {

    }
}

console.log(arrayutils.isEmpty(array));

console.log(arrayutils.max(array));

console.log(arrayutils.min(array));

console.log(arrayutils.average(array));