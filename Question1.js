// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

//Solution to Question 1
let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const compareNumbers = (a,b) => a-b;

const answer = array => {
	let sortedArray = array.sort(compareNumbers);
	let groupsortedArray = []
	groupsortedArray.push(array.shift());
	sortedArray.forEach(value => {
		if (Array.isArray(groupsortedArray[groupsortedArray.length-1]) && groupsortedArray[groupsortedArray.length-1][0] === value)
				groupsortedArray[groupsortedArray.length-1].push(value);
		else if (groupsortedArray[groupsortedArray.length-1] === value) {
			groupsortedArray[groupsortedArray.length-1] = [groupsortedArray[groupsortedArray.length-1], value];
		} 
		else{
			groupsortedArray.push(value);
		}
	})	
	return groupsortedArray;
}

answer(array);

// (9) [Array(4), Array(3), 4, 5, 10, Array(2), 391, 392, 591]
// 0: (4) [1, 1, 1, 1]
// 1: (3) [2, 2, 2]
// 2: 4
// 3: 5
// 4: 10
// 5: (2) [20, 20]
// 6: 391
// 7: 392
// 8: 591

//Solution to Bonus
let array2 = [1, "2", "3", 2];

const answer2 = array => {
	let groupedArray = new Array(2);
	groupedArray[0] = new Array;
	groupedArray[1] = new Array;
	array.forEach(value => {
		if (typeof value === "number") {
			groupedArray[0].push(value);
		}
		else if (typeof value === "string"){
			groupedArray[1].push(value);
		}
	})
	groupedArray[0].sort(compareNumbers);
	groupedArray[1].sort();
	return groupedArray;
}

answer2(array2);

// (2) [Array(2), Array(2)]
// 0: (2) [1, 2]
// 1: (2) ["2", "3"]