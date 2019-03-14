module.exports = function getLoveTrianglesCount (spichonees = []) {
	let count = 0;
	let pastSpichonees = [];
	spichonees.forEach((elem, i) => {
		let secondElem = spichonees[ elem - 1 ];
		let thirdElem = spichonees[ secondElem - 1 ];
		if ( thirdElem - 1 === i && pastSpichonees.indexOf(elem) === -1 && elem !== i + 1 ) {
			count++;
			pastSpichonees.push(thirdElem);
			pastSpichonees.push(secondElem);
			pastSpichonees.push(elem);
		}
	});
	return count;
};
