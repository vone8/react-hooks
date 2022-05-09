import React from "react";
import { userContext, channelContext } from "../../App";
function UseContextF() {
	return (
		<div>
			<userContext.Consumer>
				{(user) => {
					return (
						<channelContext.Consumer>
							{(channel) => {
								return (
									<p>
										Hello {user}, {channel} is your social user name.
									</p>
								);
							}}
						</channelContext.Consumer>
					);
				}}
			</userContext.Consumer>
		</div>
	);
}

export default UseContextF;
