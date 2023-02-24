import { Router, useRouter } from 'next/router'
import { Icon } from 'semantic-ui-react'

import * as S from '../styles/styleErroCadastro'

import Logo from '../../public/logo.svg'
import { useEffect } from 'react'

export default function Thanks() {
	const route = useRouter()

	useEffect(() => {
		setTimeout(() => route.push('/'), 5000)
	}, [route])

	return (
		<S.Page>
			<S.Container>
				<S.Container__top>
					<S.Logo>
						<S.Logo__container>
							<S.Logo__image priority={true} src={Logo} alt="" />
						</S.Logo__container>
					</S.Logo>
					<S.Info>
						<S.Title>
							Ops!!
							<br /> Houve um erro no cadastro.
							<br /> Por favor, tente novamente
						</S.Title>
					</S.Info>
				</S.Container__top>
				<S.Container__body>
					<Icon name="warning circle" size="massive" color="red" />
				</S.Container__body>
			</S.Container>
		</S.Page>
	)
}
