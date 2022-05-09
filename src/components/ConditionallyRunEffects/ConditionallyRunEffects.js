import React, { useState, useEffect } from "react";

function ConditionallyRunEffects() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("");

	useEffect(() => {
		console.log("Use Effect - Updating Document Title");
		document.title = `You've clicked ${count} times`;
	}, [count]);

	return (
		<div>
			<input
				name="fname"
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<button onClick={() => setCount(count + 1)}>{count}</button>
		</div>
	);
}

export default ConditionallyRunEffects;
