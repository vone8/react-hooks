import React, { useState } from "react";
import RunEffectsOnlyOnce from "../RunEffectsOnlyOnce/RunEffectsOnlyOnce";

function MouseContainer() {
	const [display, setDisplay] = useState(true);

	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle Display</button>
			{display && <RunEffectsOnlyOnce></RunEffectsOnlyOnce>}
		</div>
	);
}

export default MouseContainer;
