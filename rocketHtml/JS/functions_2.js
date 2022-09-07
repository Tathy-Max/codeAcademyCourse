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

// Count how many of each letter in on the array
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
