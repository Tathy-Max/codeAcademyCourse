function calculator(number1, operator, number2) {
	let result = 0;

	switch (operator) {
		case 'addition':
			result = number1 + number2;
			break;
		case 'subtratction':
			result = number1 - number2;
			break;
		case '*':
			result = number1 * number2;
			break;
		case '/':
			result = number1 / number2;
			break;
		default:
			console.log('not implemented');
			break;
	}
	return;
}
