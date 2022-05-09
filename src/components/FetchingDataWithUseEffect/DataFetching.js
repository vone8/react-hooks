import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
	const [post, setPost] = useState({});
	const [id, setId] = useState(1);
	const [idOnClick, setIdOnClick] = useState(1);
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idOnClick}`)
			.then((res) => {
				console.log(res);
				setPost(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [idOnClick]);

	const handleClick = () => {
		setIdOnClick(id);
	};

	return (
		<div>
			<input value={id} onChange={(e) => setId(e.target.value)} />
			<p>{post.title}</p>
			<button onClick={handleClick}>Click Here to Get Data</button>
			{/* <ul>
				<input value={id} onChange={(e) => setId(e.target.value)} />
				{post.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul> */}
		</div>
	);
}

export default DataFetching;
