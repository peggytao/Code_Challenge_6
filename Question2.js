// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, 
// give the target number. For example: answer([1,2,3], 4)should return [1,3]

//Solution for Question 2
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const target = 14;

const answer = (array, target) => {
	let result = new Array();
	array.forEach( value1 => {
		for (let i = array.indexOf(value1)+1; i< array.length; i++)
		{
			if ((value1 + array[i]) === target)
				result[result.length] = [value1, array[i]];
		}
	})
	return result;
}

answer(array,target);

// (6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0: (2) [1, 13]
// 1: (2) [2, 12]
// 2: (2) [3, 11]
// 3: (2) [4, 10]
// 4: (2) [5, 9]
// 5: (2) [6, 8]