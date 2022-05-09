import React, { useState } from "react";

function HookCounterPrevState() {
	const initCount = 0;
	const [count, setCount] = useState(initCount);

	const incrementByFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount((prevCount) => {
				console.log(prevCount);
				return prevCount + 1;
			});
		}
	};

	if (setCount < 0) {
		return setCount(0);
	}

	return (
		<div>
			<p>Count: {count}</p>
			<button
				onClick={() => {
					setCount((prevCount) => prevCount + 1);
				}}
			>
				Increment Count
			</button>
			<button
				onClick={() => {
					setCount((prevCount) => {
						prevCount = prevCount <= 0 ? 0 : prevCount - 1;
						if (isNaN(prevCount)) {
							prevCount = 0;
							console.log(prevCount);
						}
						return prevCount;
					});
				}}
			>
				Decrement Count
			</button>
			<button
				onClick={() => {
					setCount(initCount);
				}}
			>
				Reset Count
			</button>
			<button onClick={incrementByFive}>Increment By Five</button>
		</div>
	);
}

export default HookCounterPrevState;
