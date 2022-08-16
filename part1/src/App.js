// function App() {
// 	const now = new Date();
// 	const a = 10;
// 	const b = 20;
// 	return (
// 		<div>
// 			<p>Hello World, it is {now.toString()}</p>
// 			<p>
// 				{a} plus {b} is {a + b}
// 			</p>
// 		</div>
// 	);

const Hello = () => {
	return (
		<div>
			<p>Hello World</p>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<h1>Greetings</h1>
			<Hello />
		</div>
	);
};

export default App;
