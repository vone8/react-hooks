import React, { useState } from "react";

function HookCounter() {
	const [count, setCount] = useState(0);
	console.log(count);

	const addCountHandler = () => {
		setCount(count + 1);
	};
	const removeCountHandler = () => {
		if (count === 0) {
			return;
		}
		setCount(count - 1);
	};

	return (
		<div>
			<button onClick={addCountHandler}>Increment</button>
			<p>{count}</p>
			<button onClick={removeCountHandler}>Decrement</button>
		</div>
	);
}

export default HookCounter;
