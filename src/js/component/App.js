import React, { useState } from "react";

function App() {
	//returns a pair,
	//the current state value, and a function that lets update our state
	const [count, setCount] = useState(4);

	function decrementCount() {
		setCount(prevCount => prevCount - 1);
	}

	function incrementCount() {
		setCount(prevCount => prevCount + 1);
	}

	return (
		<>
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<button onClick={incrementCount}>+</button>
		</>
	);
}

export default App;
