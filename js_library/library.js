var _ = {
	map: function(myArray, callback) {
		var newList = [];
		for (var i = 0; i < myArray.length; i++) {
			var result = callback(myArray[i]);
			newList.push(result);
		}
		return newList;
	},

	reduce: function(myArray, callback, startValue) {
		var runTotal = startValue;
		for (var i = 0; i < myArray.length; i++) {
			runTotal = callback(runTotal, myArray[i]);
		}
		return runTotal;
	},

	find: function(myArray, callback) {
		for (var i = 0; i < myArray.length; i++) {
			if (callback(myArray[i])) {
				return myArray[i];
			}
		}
	},

	filter: function(myArray, callback) {
		var newList = [];
		for (var i = 0; i < myArray.length; i++) {
			if (callback(myArray[i])) {
				newList.push(myArray[i]);
			};
		}
		return newList;
	},

	reject: function(myArray, callback) {
		var newList = [];
		for (var i = 0; i < myArray.length; i++) {
			if (!callback(myArray[i])) {
				newList.push(myArray[i]);
			}
		}
		return newList;
	}
 }


 	var mapIt = _.map([1, 2, 3, 4, 5, 6], function(arrayItem) {
 					return arrayItem + 200;
 				});
 	console.log('MAP:', mapIt);



 	var filterIt = _.filter([1, 2, 3, 4, 5, 6], function(arrayItem) {
 						return arrayItem % 2 == 0;
 					});
 	console.log('FILTER:', filterIt);



 	var reduceIt = _.reduce([1, 2, 3, 4, 5, 6], function(a, b) {
 						return a + b;
 					}, 0);
 	console.log('REDUCE:', reduceIt);



 	var findIt = _.find([1, 2, 3, 4, 5, 6], function(arrayItem) {
 					return arrayItem % 2 == 0;
 				});
 	console.log('FIND:', findIt);


 // REJECT: return only the values that makes the expression false
 	var rejectIt = _.reject([1, 2, 3, 4, 5, 6], function(arrayItem) {
 						return arrayItem % 2 == 0;
 					});
 	console.log('REJECT:', rejectIt); // prints [1, 3, 5]
