import React, { useState } from "react";

function HookUseStateWithObj() {
	const [name, setName] = useState({ firstName: "", lastName: "" });
	return (
		<div>
			<input
				name="first-name"
				value={name.firstName}
				placeholder="First Name"
				onChange={(e) => setName({ ...name, firstName: e.target.value })}
			/>
			<input
				name="last-name"
				value={name.lastName}
				placeholder="Last Name"
				onChange={(e) => setName({ ...name, lastName: e.target.value })}
			/>
			<p>First Name: {name.firstName}</p>
			<p>Last Name: {name.lastName}</p>
			<p>{JSON.stringify(name)}</p>
		</div>
	);
}

export default HookUseStateWithObj;
