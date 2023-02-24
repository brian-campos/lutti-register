import styled, { css } from 'styled-components'
import Image from 'next/image'
import { Input as InputSemantic, Button as ButtonSemantic, Message as MessageSemantic } from 'semantic-ui-react'

export const Page = styled.section`
	width: inherit;
	height: inherit;
`

export const Container = styled.div`
	width: inherit;
	max-width: 650px;
	display: flex;
	flex-direction: column;
	gap: 2.6rem;
	margin: 0 auto;
	padding: 7rem 0;
`

export const Container__top = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5.6rem;
`

export const Logo = styled.div`
	display: flex;
	justify-content: center;
`
export const Logo__container = styled.div`
	position: relative;
	aspect-ratio: 3 / 1;
	width: clamp(18rem, 16.9157rem + 3.012vw, 20rem);
`

export const Logo__image = styled(Image)`
	width: auto;
	height: auto;
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	justify-content: center;
`

export const Title = styled.h2`
	font-size: 2.4rem;
	text-align: center;
	color: rgba(255, 255, 255, 1);
	font-family: 'M PLUS Rounded 1c', sans-serif !important;
`

export const Description = styled.div`
	font-size: 1.6rem;
	color: rgba(255, 255, 255, 1);
	padding: 0 2.4rem;
	font-family: 'M PLUS Rounded 1c', sans-serif !important;

	p {
		line-height: 1.8;
	}
`

export const DescriptionWarning = styled.p`
	color: yellow;
	opacity: 0.6;
	font-size: 1.2rem;
`

export const Container__body = styled.div`
	padding: 0 2.4rem;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
`

export const Form__content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.8rem;
`
export const Input = styled(InputSemantic).attrs(({ warning }) => ({ warning }))`
	&& {
		width: 100%;

		i {
			&:after {
				border-color: rgba(255, 188, 0, 1) transparent transparent !important;
			}
		}

		&.error input:focus {
			border-color: #e0b4b4;
			color: #9f3a38;
		}

		input {
			width: 100%;

			font-size: 1.6rem;
			color: rgba(255, 255, 255, 1);
			background: rgba(25, 25, 25, 1) !important;
			font-family: 'M PLUS Rounded 1c', sans-serif;
			padding: 1.6rem 0 1.6rem 2rem;
			border-radius: 0.6rem;
			caret-color: rgba(255, 188, 0, 1);

			&:focus {
				border-color: rgba(255, 188, 0, 1);
				color: rgba(255, 255, 255, 1);
			}

			&::placeholder {
				font-size: 1.4rem;
				font-family: 'M PLUS Rounded 1c', sans-serif !important;

				text-transform: uppercase;
				color: rgba(173, 173, 173, 1);
			}

			&.error {
				border-color: blue !important;
			}
		}

		${({ warning }) =>
			warning &&
			css`
				input {
					border-color: #e0b4b4;
					color: #9f3a38;
				}
			`}
	}
`

export const Form__actions = styled.div``

export const Button = styled(ButtonSemantic)`
	&& {
		font-size: 1.4rem;
		font-weight: 500;
		border-radius: 0.6rem;
		padding: 1.8rem 0;
		background: rgba(255, 188, 0, 1);
		font-family: 'M PLUS Rounded 1c', sans-serif !important;

		&:hover,
		&:active,
		&:focus {
			background: rgba(255, 175, 0, 1) !important;
		}

		@media (min-width: 650px) {
			max-width: 20rem;
			margin: 0 auto;
		}
	}
`
export const Message = styled(MessageSemantic).attrs(({ show }) => ({ show }))`
	&& {
		position: absolute;
		top: 0;
		width: 100%;
		transform: translateY(-350%);
		transition: transform 0.3s ease;
		margin: 0;

		${({ show }) =>
			show &&
			css`
				transform: translateY(0);
			`};
	}
`
