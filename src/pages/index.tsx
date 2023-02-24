import { useState } from 'react'
import { useRouter } from 'next/router'
import { cpf as cpfValidate } from 'cpf-cnpj-validator'
import { Icon } from 'semantic-ui-react'
import axios from 'axios'

import { cpfMask, phoneMask, dataMask } from '@/utils'

import Logo from '../../public/logo.svg'

import * as S from '@/styles/styleIndex'
import Head from 'next/head'

export default function Home() {
	const route = useRouter()

	const [loading, setLoading] = useState(false)
	const handleLoading = (activeLoading: boolean) => setLoading(activeLoading)

	// CPF
	const [cpf, setCpf] = useState('')
	const handleCpf = (event: React.ChangeEvent<HTMLInputElement>) => setCpf(cpfMask(event.target.value))

	const [cpfIconValidate, setCpfIconValidate] = useState('')
	const handleCpfIconValidate = (icon: any) => setCpfIconValidate(icon)

	const [errorCpf, setErrorCpf] = useState({ active: false, message: '' })
	const handleErrorCpf = (active: boolean, message: string = '') => setErrorCpf({ active, message })

	const onBlurValidateCpf = () => {
		const stripCpf = cpfValidate.strip(cpf)

		cpf && !cpfValidate.isValid(stripCpf) ? handleErrorCpf(true, 'CPF Invalido') : handleErrorCpf(false)
	}

	const onBlurValidateCpfInDB = () => {
		const stripCpf = cpfValidate.strip(cpf)

		if (cpf && cpfValidate.isValid(stripCpf)) {
			handleLoading(true)

			fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/find/${stripCpf}`)
				.then((response: any) => {
					if (response.status === 200) {
						handleErrorCpf(true, 'Este CPF já consta no nosso cadastro')
						return handleCpfIconValidate(<Icon color="red" name="warning circle" size="large" />)
					} else {
						handleCpfIconValidate(<Icon color="green" name="check circle" size="large" />)
					}
				})
				.finally(() => handleLoading(false))
		}
	}

	// name
	const [name, setName] = useState('')
	const handleName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)

	const [errorName, setErrorName] = useState({ active: false, message: '' })
	const handleErrorName = (active: boolean, message: string = '') => setErrorName({ active, message })

	const onBlurValidateName = () => {
		if (name && name.length < 3) {
			handleErrorName(true, 'O nome não pode ter menos que 3 letras')
		}
	}

	// phone
	const [phone, setPhone] = useState('')
	const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => setPhone(phoneMask(event.target.value))

	const [errorPhone, setErrorPhone] = useState({ active: false, message: '' })
	const handleErrorPhone = (active: boolean, message: string = '') => setErrorPhone({ active, message })

	const onBlurValidatePhone = () => {
		if (phone && phone.length < 15) {
			handleErrorPhone(true, 'Telefone inválido')
		}
	}

	// birthday
	const [birthday, setBirthday] = useState('')
	const handleBirthday = (event: React.ChangeEvent<HTMLInputElement>) => setBirthday(dataMask(event.target.value))

	const [errorBirthday, setErrorBirthday] = useState({ active: false, message: '' })
	const handleErrorBirthday = (active: boolean, message: string = '') => setErrorBirthday({ active, message })

	const onBlurValidateBirthday = () => {
		const birthdayYear = birthday.split('/').pop() ?? ''

		if (birthday && birthday.length < 10) {
			handleErrorBirthday(true, 'Data inválida')
		}

		if (birthday && new Date().getFullYear() - +birthdayYear < 18) {
			handleErrorBirthday(true, 'Você precisa ter 18 anos ou mais')
		}
	}

	// email
	const [email, setEmail] = useState('')
	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)

	const [errorEmail, setErrorEmail] = useState({ active: false, message: '' })
	const handleErrorEmail = (active: boolean, message: string = '') => setErrorEmail({ active, message })

	const onBlurValidateEmail = () => {
		const regexEmail = new RegExp(/\S+@\S+\.\S+/)

		if (email && !regexEmail.test(email)) {
			handleErrorEmail(true, 'Email inválido')
		}
	}

	// password
	const [password, setPassword] = useState('')
	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)

	const [typeInputPassword, setTypePassword] = useState('password')
	const handleTypeInputPassword = (type: 'password' | 'text') => setTypePassword(type)

	const [errorPassword, setErrorPassword] = useState({ active: false, message: '' })
	const handleErrorPassword = (active: boolean, message: string = '') => setErrorPassword({ active, message })

	const onBlurValidatePassword = () => {
		if (password && password.length < 6) {
			handleErrorPassword(true, 'A senha deve conter no minimo 6 caracteres')
		}
	}

	// handle register
	const [loadingRegister, setLoadingRegister] = useState(false)
	const handleLoadingRegister = (activeLoading: boolean) => setLoadingRegister(activeLoading)

	const handleRegister = (event: React.MouseEvent) => {
		event.preventDefault()

		const stripCpf = cpfValidate.strip(cpf)
		const stripPhone = phone.replace(/\D/g, '')
		const stripBirthday = new Date(birthday.split('/').reverse().join('-'))

		const payload = {
			name,
			cpf: stripCpf,
			phone: stripPhone,
			birthday: stripBirthday.toISOString(),
			email: email.trim(),
			password,
		}

		handleLoadingRegister(true)

		fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/create`, {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: { 'Content-Type': 'application/json' },
		})
			.then((response: any) => response.json())
			.then((data: any) => {
				console.log(data)

				data.statusCode === 201 && route.push('cadastrado')
				data.statusCode === 400 && route.push('erro-cadastro')
			})
			.finally(() => handleLoadingRegister(false))
	}

	return (
		<>
			<S.Message
				color="red"
				show={
					errorCpf.active ||
					errorName.active ||
					errorPhone.active ||
					errorBirthday.active ||
					errorEmail.active ||
					errorPassword.active
				}
			>
				<strong>
					{errorCpf.message ||
						errorName.message ||
						errorPhone.message ||
						errorBirthday.message ||
						errorEmail.message ||
						errorPassword.message}
				</strong>
			</S.Message>

			<S.Page>
				<S.Container>
					<S.Container__top>
						<S.Logo>
							<S.Logo__container>
								<S.Logo__image priority={true} src={Logo} alt="" />
							</S.Logo__container>
						</S.Logo>
						<S.Info>
							<S.Title>Cadastro</S.Title>
							<S.Description>
								<p>
									Olá, seja muito bem-vindo(a) a nossa página de cadastro. Por favor, preencha os campos abaixo
									de forma correta para acessar a nossa loja e finalizar a compra no selfcheckout.
								</p>
								<S.DescriptionWarning>
									<Icon color="yellow" name="warning circle" size="large" />
									Todos podem realizar o cadastro, a única restrição é para o cadastro de menores de idade que,
									por questões de LGPD e, ainda, devido a venda de bebida alcoólica, não será permitido.
									Contudo, os condôminos desta faixa etária poderão acessar a loja utilizando o CPF dos pais ou
									responsáveis legais.
								</S.DescriptionWarning>
							</S.Description>
						</S.Info>
					</S.Container__top>
					<S.Container__body>
						<S.Form>
							<S.Form__content>
								<S.Input
									type="tel"
									value={cpf}
									placeholder="cpf"
									loading={loading}
									onChange={handleCpf}
									error={errorCpf.active}
									autoComplete="new-password"
									disabled={loadingRegister}
									onFocus={() => {
										handleErrorCpf(false)
										handleCpfIconValidate('')
									}}
									icon={cpfIconValidate}
									onBlur={() => {
										onBlurValidateCpf()
										onBlurValidateCpfInDB()
									}}
								/>

								<S.Input
									value={name}
									placeholder="nome"
									disabled={loadingRegister}
									onChange={handleName}
									error={errorName.active}
									onBlur={onBlurValidateName}
									autoComplete="new-password"
									onFocus={() => {
										handleErrorName(false)
									}}
								/>

								<S.Input
									type="tel"
									value={phone}
									maxLength={15}
									disabled={loadingRegister}
									placeholder="Telefone"
									onChange={handlePhone}
									error={errorPhone.active}
									autoComplete="new-password"
									onBlur={onBlurValidatePhone}
									onFocus={() => {
										handleErrorPhone(false)
									}}
								/>

								<S.Input
									type="tel"
									value={birthday}
									maxLength={10}
									disabled={loadingRegister}
									onChange={handleBirthday}
									autoComplete="new-password"
									error={errorBirthday.active}
									onBlur={onBlurValidateBirthday}
									placeholder="Data de nascimento"
									onFocus={() => {
										handleErrorBirthday(false)
									}}
								/>

								<S.Input
									value={email}
									onChange={handleEmail}
									disabled={loadingRegister}
									error={errorEmail.active}
									autoComplete="new-password"
									onBlur={onBlurValidateEmail}
									placeholder="Email"
									onFocus={() => {
										handleErrorEmail(false)
									}}
								/>

								<S.Input
									value={password}
									placeholder="Senha"
									type={typeInputPassword}
									disabled={loadingRegister}
									onChange={handlePassword}
									autoComplete="new-password"
									error={errorPassword.active}
									onBlur={onBlurValidatePassword}
									onFocus={() => {
										handleErrorPassword(false)
									}}
									icon={
										typeInputPassword === 'password' ? (
											<Icon
												name="eye"
												size="large"
												inverted
												circular
												link
												onClick={() => handleTypeInputPassword('text')}
											/>
										) : (
											<Icon
												name="eye slash"
												size="large"
												inverted
												circular
												link
												onClick={() => handleTypeInputPassword('password')}
											/>
										)
									}
								/>
							</S.Form__content>
							<S.Form__actions>
								<S.Button
									fluid
									onClick={handleRegister}
									loading={loadingRegister}
									disabled={
										!name ||
										!cpf ||
										!phone ||
										!birthday ||
										!email ||
										!password ||
										errorCpf.active ||
										errorName.active ||
										errorPhone.active ||
										errorBirthday.active ||
										errorEmail.active ||
										errorPassword.active
									}
								>
									Cadastrar
								</S.Button>
							</S.Form__actions>
						</S.Form>
					</S.Container__body>
				</S.Container>
			</S.Page>
		</>
	)
}
