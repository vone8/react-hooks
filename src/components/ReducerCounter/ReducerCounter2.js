import React, { useReducer } from "react";

const initialState = {
	firstCounter: 0,
};
const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { firstCounter: state.firstCounter + action.value };
		case "decrement":
			return { firstCounter: state.firstCounter - action.value };
		case "reset":
			return 0;
		default:
			return state;
	}
};

function ReducerCounter2() {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<div>
				<p>count: {count.firstCounter}</p>
				<button onClick={() => dispatch({ type: "increment" })}>
					Increment
				</button>
				<button onClick={() => dispatch({ type: "decrement" })}>
					Decrement
				</button>
				<button onClick={() => dispatch({ type: "increment", value: 5 })}>
					Increment By 5
				</button>
				<button onClick={() => dispatch({ type: "decrement", value: 5 })}>
					Decrement
				</button>
				<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
			</div>
		</div>
	);
}

export default ReducerCounter2;
