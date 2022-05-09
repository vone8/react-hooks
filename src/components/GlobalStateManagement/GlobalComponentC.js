import React, { useContext } from "react";
import { countContext } from "../../App";

function GlobalComponentC() {
	const CountContextComponent = useContext(countContext);
	return (
		<div>
			<p>Global Component C: {CountContextComponent.countState}</p>
			<button onClick={() => CountContextComponent.countDispatch("increment")}>
				Increment
			</button>
			<button onClick={() => CountContextComponent.countDispatch("decrement")}>
				Decrement
			</button>
			<button onClick={() => CountContextComponent.countDispatch("reset")}>
				Reset
			</button>
		</div>
	);
}

export default GlobalComponentC;
