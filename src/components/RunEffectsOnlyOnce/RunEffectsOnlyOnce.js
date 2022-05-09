import React, { useState, useEffect } from "react";

function RunEffectsOnlyOnce() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const mousePosition = (e) => {
		console.log("Mouse Position");
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log("UseEffect Called !");
		window.addEventListener("mousemove", mousePosition);

		return () => {
			console.log("Removing Unmount Component");
			window.removeEventListener("mousemove", mousePosition);
		};
	}, []);

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			X Co-Ordinates {x} and Y Co-Ordinates {y}
		</div>
	);
}

export default RunEffectsOnlyOnce;
