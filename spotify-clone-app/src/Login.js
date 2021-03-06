import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
	return (
		/*login logo ans button*/
		<div className="login">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png"
				alt=""
			/>
			{/*button redirects the user to spotify to login*/}
			<a href={accessUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
}

export default Login;
