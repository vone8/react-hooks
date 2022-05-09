import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
	loading: true,
	error: "",
	post: {},
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				...state,
				loading: false,
				error: "",
				post: action.payload,
			};
		case "FETCH_ERROR":
			return {
				...state,
				loading: false,
				error: "Error To Fetch Data",
				Post: {},
			};
		default:
			return state;
	}
};

function DataFetchingTwo() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/1`)
			.then((res) => {
				dispatch({ type: "FETCH_SUCCESS", payload: res.data });
			})
			.catch((error) => {
				dispatch({ type: "FETCH_ERROR" });
			});
	}, []);

	return (
		console.log(state),
		(
			<div>
				{state.post.title}
				{state.error ? state.error : null}
			</div>
		)
	);
}

export default DataFetchingTwo;
