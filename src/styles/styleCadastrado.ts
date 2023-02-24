import styled from 'styled-components'
import Image from 'next/image'

export const Page = styled.section`
	width: inherit;
	height: inherit;
`

export const Container = styled.div`
	width: inherit;
	max-width: 650px;
	display: flex;
	flex-direction: column;
	gap: 10rem;
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

export const Container__body = styled.div`
	display: flex;
	justify-content: center;
	padding: 0 2.4rem;
`
