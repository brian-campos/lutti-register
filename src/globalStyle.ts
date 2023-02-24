import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html,
	body,
	#__next {
		width: 100%;
		height: 100%;
		background-color: rgba(18, 18, 18, 1);
		font-family: 'M PLUS Rounded 1c', sans-serif !important;
	}

	html {
		font-size: 62.5%;
	}

	img {
		display: block;
		max-width: 100%;
	}

	svg {
		display: block;
	}

`
