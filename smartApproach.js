
function main(order) {
	if (order < 4) return undefined;
	var set = permute(order);
	var solutions = [];
	for (var i = 0; i < set.length; i++) {
		if (isSolved(set[i]))
			solutions.push(parseInt(set[i]));
	} return solutions;
}

function permute(order) {
// permutation generating code modified from user le_m at:
// https://stackoverflow.com/questions/9960908/permutations-in-javascript
	var result = [""];
	for (var j = 1; j <= order; j++) result[0] += j;
	// generates initial board state using numbers from 1 to <order>

	var permutation = result[0].split("");
	var length = permutation.length;
	var c = new Array(length).fill(0);
	var i = 1;
	var k;
	var p;

	while (i < length) {
		// fills <result> with all possible permutations
		if (c[i] < i) {
			k = i % 2 && c[i];
			p = permutation[i];
			permutation[i] = permutation[k];
			permutation[k] = p;
			c[i]++;
			i = 1;
			result.push(permutation.slice().join(""));
		} else {
			c[i] = 0;
			i++;
		}
	} return result;
}

function isSolved(board) {
	// checks each position is not diagonal to subsequent positions
	var size = board.length;
	var current;
	var next;

	for (var i = 0; i < size; i++) {
		current = board.charAt(i);
		for (var j = i + 1; j < size; j++) {
			next = board.charAt(j);
			if (Math.abs(current - next) == j - i) return false;
		}
	} return true;
}