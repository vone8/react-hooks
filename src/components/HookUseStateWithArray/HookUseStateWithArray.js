import React, { useState } from "react";

function HookUseStateWithArray() {
	const [items, setItems] = useState([]);
	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10 + 1),
			},
		]);
		console.log(items);
	};

	console.log(items);

	return (
		<div>
			<ul style={{ listStyle: "none", paddingLeft: "0px" }}>
				{items?.map((item) => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
			<button onClick={addItem}>Add Item</button>
		</div>
	);
}

export default HookUseStateWithArray;
