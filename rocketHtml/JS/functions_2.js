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

	if (celsiusExist) {
		updatedDegree = Number(degree.toUpperCase().replace('C', ''));
		formula = (celsius) => (celsius * 9) / 5 + 32;
		degreeSign = 'F';
	}

	return formula(updatedDegree) + degreeSign;
}
try {
	console.log(transformDegree('50F'));
	console.log(transformDegree('50C'));
} catch (error) {
	console.log(error.message);
}

// books algorithm
const booksByCategory = [
	{
		category: 'Rich',
		books: [
			{
				title: 'The Secret of a Millionaire Mind',
				author: 'T. Harv Eker',
			},
			{
				title: 'The richest man in Babylon',
				author: 'George S. Clason',
			},
			{
				title: 'Rich dad, poor dad',
				author: 'Robert T. Kiyosaki and Sharon L. Letcher',
			},
		],
	},
	{
		category: 'Emotional Intelligence',
		books: [
			{
				title: 'You are irreplaceable',
				author: 'August Cury',
			},
			{
				title: 'Anxiety - how to face the evil of the century ',
				author: 'August Cury',
			},
			{
				title: 'The 7 habits of highly effective people',
				author: 'Stephen R. Covey',
			},
		],
	},
];

const totalCategories = booksByCategory.length;
console.log(totalCategories);

for (let category of booksByCategory) {
	console.log('Total of categories is:', category.books.length);
}

function countAuthors() {
	let authors = [];
	for (let category of booksByCategory) {
		for (let book of category.books) {
			if (authors.indexOf(book.author) == -1) {
				authors.push(book.author);
			}
		}
	}
	console.log('Total of authors is:', authors.length);
}
countAuthors();

function booksOfAugust() {
	let books = [];
	for (let category of booksByCategory) {
		for (let book of category.books) {
			if (book.author === 'August Cury') {
				books.push(book.title);
			}
		}
	}
	console.log(`August' books: ${books}`);
	console.log('August books: ', books);
}
booksOfAugust();

function booksOfAuthor(author) {
	let books = [];
	for (let category of booksByCategory) {
		for (let book of category.books) {
			if (book.author === author) {
				books.push(book.title);
			}
		}
	}
	console.log(`Books of: ${author} ${books.join(', ')}`);
}
booksOfAuthor('George S. Clason');

//
(() => {
	let x = (y = 10);
})();
console.log(typeof x);
console.log(typeof y);

// ???
[1, 2, 3].map((num) => {
	if (typeof num === 'number') return;

	return num * 2;
});

//
function z() {
	return (() => 0)();
}
typeof z();
console.log(z);

//
var output = (function (g) {
	delete g;
	return g;
})(0);
console.log(output);

//
const obj = { prop: 12 };
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));

//
const obj1 = { property1: '10' };
const obj2 = Object.freeze(obj1);
obj2.property1 = '20';
console.log(obj2.property1);

//structural versus OOP
let altura = 50;
let largura = 60;

function calcularArea() {
	return altura * largura;
}
let area = calcularArea();
console.log(area);

class Poligono {
	constructor(height, width) {
		this.alt = height;
		this.lar = width;
	}

	get area() {
		return this.#calculateArea(); // Usar a # significa que a funcao nao estara visivel fora da classe (Encapsulation)
	}

	#calculateArea() {
		return this.alt * this.lar;
	}
}

let poligono = new Poligono(50, 60);
console.log(poligono.area);
// console.log(calculateArea(poligono)); Nao funciona pq e uma funcao que so esta disponivel dentro da classe (Encapsulation)

//
class Vehicle {
	wheels = 4;

	move(direction) {}
	turn(direction) {}
}

class Motorcycle extends Vehicle {
	constructor() {
		super(); // will get all attributes and methods from Vehicle
		this.wheels = 2;
	}
}

//independent function - recursion
const factorial = (x) => {
	if (x === 0) {
		return 1;
	}
	return x * factorial(x - 1);
};
console.log(factorial(5));

//array reverse ???
const A = [4, 3, 2, 1];
const B = [];

function reverseArray(A) {
	for (let i = 0; i < A.length; i--) {
		if (A[i].length - 1) {
			return B.push;
		}
	}
}
console.log(reverseArray(B));
let numero = 10;
function ti() {
	let texto = '0' + numero;
}

//
const arr = [7, 5, 9, 1];
const value1 = Math.max.apply(null, arr);

console.log(value1);

//
const obj11 = { Name: 'Hello', Age: 16 };
const obj22 = { Name: 'Hello', Age: 16 };
console.log(obj11 === obj22);

//
function solve(arr, rotations) {
	if (rotations == 0) return arr;
	for (let i = 0; i < rotations; i++) {
		let element = arr.pop();
		arr.unshift(element);
	}
	return arr;
}
console.log(arr);

// infinity
let g = Math.max();
let h = Math.min();
console.log(g);
console.log(h);

let arrr = [345435, 1, 744, 78899, 3e500];
let smaller = Infinity;
for (let nr of arrr) {
	if (nr < smaller) smaller = nr;
}
console.log(smaller);

// empty x
const numberss = [1, 2, 3];
numberss[10] = 11;
console.log(numberss);

// ???
const set = new Set();
set.add(5);
set.add('Hello');
set.add({ name: 'Scaler' });
for (let item of set) {
	console.log(item + 6);
}

//
function testt(...args) {
	console.log(typeof args);
}
testt(12);

// diference between class and functions

//1 - object
const book = {
	name: 'React Native',
	publisher: 'House of Code',
	pages: 185,
	message: function () {
		console.log('Alura recommends this book' + this.name + '!');
	},
};

book.message();

//2 - function exercendo papel de classe
const book1 = function (name, publisher, pages) {
	(gName = name), (gPublisher = publisher), (gPages = pages);

	//methods
	this.getName = function () {
		return gName;
	};
	this.getPublisher = function () {
		return gPublisher;
	};
	this.getPages = function () {
		return gPages;
	};
};
const graphQL = new book1('GraphQL', 'House of Code', 173);
console.log(graphQL.getPublisher());

//prototype
const name2 = 'Alura';

const temp = new String(name2);
console.log(temp.toString());
//const temp received a string, so string has prototypes, that is why when we use toString method using const name2 as a parameter, we receive the content of const name2

//3 - class
class Book2 {
	// constructor receives parameters
	contructor(name, publisher, pages) {
		this.name = name;
		this.publisher = publisher;
		this.pages = pages;
	}
	//methods
	typeTitle() {
		console.log(`Title: $(this.name)`);
	}
	typeTitleDescription() {
		console.log(
			`${this.name} is a book of publisher ${this.publisher} and it has ${this.pages} pages`
		);
	}
}

const NodeJS = new Book2('NodeJS First Steps', 'House of Code', 195);

NodeJS.typeTitle();
NodeJS.typeTitleDescription();
//classes are functions, but there are differences between them. Ex. classes can't be hoisted

//4- Inheritance
class BookCollection extends Book2 {
	constructor(name, nameCollection) {
		super(name); //super receives the proprety from the other class
		this.nameCollection - nameCollection;
	}

	typeCollection() {
		console.log(
			`The book ${this.name} it is part of ${this.nameCollection} collection`
		);
	}
}

const ProgrammingLogic = new BookCollection(
	'Programming Logic',
	'Start Programming'
);

ProgrammingLogic.typeCollection();
