import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Icon } from 'semantic-ui-react'

import * as S from '../styles/styleCadastrado'

import Logo from '../../public/logo.svg'

export default function Thanks() {
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
						<S.Title>Cadastro realizado</S.Title>
						<S.Description>
							<p>
								Para acessar a loja, aperte * e espere pedir o login. Em seguida, digite o CPF cadastrado e aperte
								* para confirmar.
							</p>
							<p>Pronto, é só aguardar o aviso de porta liberada para acessar a loja!</p>
						</S.Description>
					</S.Info>
				</S.Container__top>
				<S.Container__body>
					<Icon name="check circle" size="massive" color="green" />
				</S.Container__body>
			</S.Container>
		</S.Page>
	)
}
