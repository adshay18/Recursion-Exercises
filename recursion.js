/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
	if (i === nums.length) return 1;

	return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestW = [ 0 ], i = 0) {
	if (i === words.length) return longestW[0];

	if (words[i].length > longestW[0]) {
		longestW.pop();
		longestW.push(words[i].length);
	}
	return longest(words, longestW, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, chopped = [], i = 0) {
	if (i === str.length) return chopped.join('');
	if (i % 2 === 0) {
		chopped.push(str[i]);
	}
	return everyOther(str, chopped, i + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, reverse = [], i = str.length - 1) {
	if (i < 0) {
		if (reverse.join('') === str) {
			return true;
		}
		return false;
	}

	reverse.push(str[i]);
	return isPalindrome(str, reverse, i - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str, reverse = [], i = str.length - 1) {
	if (i < 0) return reverse.join('');
	reverse.push(str[i]);
	return revString(str, reverse, i - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
