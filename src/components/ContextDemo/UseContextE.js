import React, { useContext } from "react";
// import UseContextF from "./UseContextF";
import { userContext, channelContext } from "../../App";

function UseContextE() {
	const user = useContext(userContext);
	const channel = useContext(channelContext);
	return (
		<div>
			{user} - {channel}
			{/* <UseContextF /> */}
		</div>
	);
}

export default UseContextE;
