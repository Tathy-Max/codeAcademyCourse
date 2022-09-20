function createPhrases() {
	console.log('Study is good');
	console.log('Be patient and consistent');
	console.log('Review is the mother of wisdow');
}
//Calling the function
createPhrases();

// Why use functions:
// Agrupar um bloco de codigo
// Reutilizacao do codigo
// Dar significado ao codigo, explicar o codigo

// Function expression or function anonymous
const sum = function (number1, number2) {
	//number1 and number2 are parameters
	console.log(number1 + number2);
};

sum(2, 3); // 2 and 3 are arguments
sum(5, 8);

const sum2 = function (number11, number22) {
	let total = number22 + number22;
	return total;
};

let number11 = 34;
let number22 = 29;

console.log(`the sum is ${sum2(number11, number22)}`);

//Se eu nao passar a variavel como parametro (ou se eu passar outro parametro qualquer) dentro da funcao, ele vai mudar o valor dela no escopo local e global
let subject;

function createThink() {
	//funciona = function creteThink(bananinha)
	subject = 'study';
	return subject;
}

console.log(subject);
console.log(createThink());
console.log(subject);

//Se eu passar a variavel como parametro dentro da funcao, ele vai mudar o valor dela somente no escopo local
let test;

function createTest(test) {
	test = 'work';
	return test;
}

console.log(test);
console.log(createTest());
console.log(test);

//Arrow function
// const sayMyName = funtion () {
// 	console.log('Tathy')
// }

// const sayMyName = () => {
// 	console.log('Tathy')
// }

//Callback
function sayMyAge(age) {
	console.log(age);
}

sayMyAge('44');

function tellMyAge(age) {
	console.log('antes de executar a funcao callback');
	age();
	console.log('depois de executar a funcao callback');
}

tellMyAge(() => {
	console.log('estou em uma callback');
});

//Constructor function - used to create objects

function Person(name, age, adress) {
	this.name = name;
	this.age = age;
	this.adress = adress;
	this.walk = function () {
		return this.name + ' is walking';
	};
	this.walk();
	console.log(this.walk());
}

const tathy = new Person('Tathy', 44, 'Riverbend');
const ivan = new Person('Ivan', 44, 'Byron');

console.log(tathy, tathy.walk());
console.log(ivan);

let name = new String('Tathy');

console.log(name);

let date = new Date();

console.log(date);
console.log(date.__proto__);

//Stacks data structure
//Step 1: modeling
class Stack {
	constructor() {
		this.data = [];
		this.top = -1;
	}

	push(value) {
		this.top++;
		this.data[this.top] = value;
		return this.data;
	}

	pop() {
		if (this.top < 0) return undefined;
		const poppedTop = this.data[this.top];
		delete this.data[this.top];
		this.top--;
		return poppedTop;
	}

	peek() {
		return this.top >= 0 ? this.data[this.top] : undefined;
	}
}

// o constructor sera a funcao executada quando criarmos a nossa funcao no passo 2
// o this e a referencia do objeto ou do dado que iremos criar no step 2

//Step 2: using
const stack = new Stack();

// o new e o momento em que instanciamos e o Stack se torna um objeto

//Step 3: manipulating data
stack.push('learning');
stack.push('data');
console.log(stack.push('structures'));

console.log(stack.peek());

stack.pop();
console.log(stack.pop());

console.log(stack.peek());

//Queue
class Queue {
	constructor() {
		this.data = [];
	}
	enqueue(item) {
		this.data.push(item);
		console.log(`${item} arrived`);
	}
	dequeue() {
		const item = this.data.shift();
		console.log(`${item} left`);
	}
}

const fila = new Queue();

fila.enqueue('Mariana');
fila.enqueue('Joao');
fila.dequeue();
fila.dequeue();

// Contar quantos caracteres tem uma palavra e quantos digitos tem um numero
let word = 'paralelepipedo';
console.log(word.length);

let number = 1234;
console.log(String(number).length);

// Tranformar um numero quebrado com 2 casas decimais e trocar o ponto por virgula
let numberBroken = 4555.666;
console.log(numberBroken.toFixed(2).replace('.', ','));

//split() (transformar de string para array), join() (transformar de array para string)
//includes() (verificar se o texto inclui uma palavra), Array.from (transformar cadeia de caracteres em array)
let phrase = 'I want to live love';
let myArray = phrase.split('t');
console.log(myArray);

let phraseWithUnderscore = myArray.join('_');
console.log(phraseWithUnderscore.toUpperCase());

console.log(phrase.includes('love'));

let text = 'manipulation';
console.log(Array.from(text));

//criar array com construtor
let arrayConstructor = new Array('a', 'b', 'c');
console.log(arrayConstructor);

let arrayEmpty = new Array(10); // array com 10 posicoes vazias
console.log(arrayEmpty);

//contar elementos de uma array
let complexArray = [
	'a',
	{ type: 'array' },
	function () {
		return 'hello';
	},
];

console.log(complexArray);
console.log(complexArray[2]());

//Finding Intersection
let strArr = ['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'];

function FindIntersection(strArr) {
	const lists = strArr.map((str) => str.split(', '));
	console.log(lists);

	const firstList = lists[0];
	const secondList = lists[1];

	let matchMap = {};
	let resultArr = [];

	firstList.forEach((num) => (matchMap[num] = true));

	secondList.forEach((num) => {
		if (matchMap[num]) {
			resultArr.push(num);
		}
	});
	if (resultArr.length > 0) {
		return resultArr.join(',');
	}
	return false;
}
console.log(FindIntersection(strArr));

// Count how many of each letter is on the array
let letters = ['a', 'b', 'c', 'd', 'a', 'a', 'b'];

let count = {};

letters.forEach((item) => {
	if (count[item]) {
		count[item]++;
	} else {
		count[item] = 1;
	}
});
console.log(count);

// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc

function giveCentury(year) {
	let century = 0;
	while (year > 0) {
		year = year - 100;
		century = century + 1;
		// console.log(century);
	}
	return century;
}
console.log(giveCentury(2022));

// Given the string, check if it is a palindrome

function isPalindrome(inputString) {
	inputString = inputString.toLowerCase().replace(/\W/g, '');
	console.log(inputString);
	for (let i = 0; i < inputString.length; i += 1) {
		if (inputString[i] !== inputString[inputString.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
console.log(isPalindrome('I did, Did I?'));

//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product
inputArray = [3, 6, -2, -5, 7, 3];

function productMax(inputArray) {
	let maxProduct = inputArray[0] * inputArray[1];
	for (let i = 1; i < inputArray.length; i++) {
		product = inputArray[i] * inputArray[i + 1];
		if (product > maxProduct) maxProduct = product;
	}
	return maxProduct;
}
console.log(productMax(inputArray));

//Object destructuring

const user = {
	firstName: 'Tathy',
	idade: '24',
	address: {
		street: 'Dalhousie dr',
		number: '176',
	},
};
const firstName = user.firstName; //normal
const { address, idade: age, nickname = 'Max' } = user; //destructured

//rest operator
const { firtsName, ...rest } = user; // ira trazer todo o resto menos o firstName

//Promisses
const sumTwoNumbers = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b);
			reject(a - b);
		}, 2000);
	});
};

sumTwoNumbers(1, 3)
	.then((sum) => {
		console.log(sum);
	})
	.catch((err) => {
		console.log(err);
	});

// Given two strings - pattern and source
// The string pattern contains only the symbols 0 and 1, and the string source contains only lowercase English letters.
// Matches have to follow three conditions are met:
// equal length,
// for each 0 in pattern the corresponding letter in the substring is a vowel,
// for each 1 in pattern the corresponding letter is a consonant

function matchStrings(pattern, source) {
	let subStrings = source.split('');
	console.log(subStrings);
	let arrayInBinary = [];

	for (let char of subStrings) {
		if (/[aeiouy]/.test(char) === true) {
			arrayInBinary.push(0);
		} else if (/[bcdfghjklmnpqrstvwxz]/.test(char) === true) {
			arrayInBinary.push(1);
		} else {
			arrayInBinary.push(' ');
		}
	}
	let countMatches = 0;
	let string = arrayInBinary.join('');
	console.log(string);
	let substring = pattern;
	console.log(substring);

	for (let i = 0; i < string.length; i++) {
		for (let j = 0; j < substring.length; j++) {
			if (substring[j] !== string[i + j]) {
				break;
			}
			if (j === substring.length - 1) {
				countMatches++;
				console.log(countMatches);
			}
		}
	}
	return countMatches;
}
matchStrings('010', 'love');

//transform C to F and vice versa
function transformDegree(degree) {
	const celsiusExist = degree.toUpperCase().includes('C');
	const fahrenheitExist = degree.toUpperCase().includes('F');

	if (!celsiusExist && !fahrenheitExist) {
		throw new Error('Degree not exists');
	}

	let updatedDegree = Number(degree.toUpperCase().replace('F', ''));
	let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
	let degreeSign = 'C';

	return formula(updatedDegree) + degreeSign;

	try {
		transformDegree('50F');
		transformDegree('50Z');
	} catch (error) {
		cpnsole.log(error.message);
	}
}
