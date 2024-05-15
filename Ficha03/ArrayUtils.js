module.exports = {
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
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return i;
            }
        }
        return -1;
    },

    subArray: function (array, startIndex, endIndex) {
        var sub = [];
        for (let i = startIndex; i <= endIndex; i++){
             sub.push(array[i]);          
        }
        return sub;
    },

    isSameLength: function (array, array2) {
        return array.length == array2.length;
    },

    reverse: function (array) {
        var resultado = [];
        for (let i = array.length -1; i >= 0 ; i--) {
            resultado.push(array[i]);
        }
        return resultado;
    },

    swap: function (array, index1, index2) {
        var value1 = array[index1];
        var value2 = array[index2];

        array[index1] = value2;
        array[index2] = value1;

        return array;
    }
}

