(function () {
    var randomArray = [];
    console.log(randomArray);

    for (var i = 0; i < 100; i++) {
        randomArray.push(Math.floor(Math.random() * (100 - 1)) + 1);
    }
    console.log(randomArray);

    var findMinMax = function (arrayToFind, criteria) {
        var minValue = Infinity;
        var maxValue = -Infinity;
        if (criteria == 'min') {
            arrayToFind.forEach(function (element) {
                if (element < minValue) {
                    minValue = element;
                }
            });

            return minValue;
        } else if (criteria == 'max') {
            arrayToFind.forEach(function (element) {
                if (element > maxValue) {
                    maxValue = element;
                }
            });

            return maxValue;
        } else {
            return 'Bad search criteria';
        }
    };

    var resultMax = findMinMax(randomArray, 'max');
    var resultMin = findMinMax(randomArray, 'min');
    console.log(resultMax);
    console.log(resultMin);

    function convertArrayToObj (array) {
        var obj = {};

        var i = 0;
        var fieldName = '';
        array.forEach(function (element) {
            if (i < 26) {
                fieldName = String.fromCharCode(i + 97);
            } else {
                fieldName = i - 25;
            }
            obj[fieldName] = element;
            i++;
        });

        return obj;
    }

    console.log(convertArrayToObj(randomArray));

    var filterNew = function (firstArray, secondArray) {
        secondArray.forEach(function (sElement) {
            var i = 0;
            firstArray.forEach(function (fElement) {
                if (fElement == sElement) {
                    firstArray.splice(i, 1);
                }
                i++;
            });
        })
    };

    var newData = [2, 12, 22, 6, 32];
    var oldData = [12, 5, 7, 17, 22, 32];

    filterNew(newData, oldData);

    console.log(newData);
})();