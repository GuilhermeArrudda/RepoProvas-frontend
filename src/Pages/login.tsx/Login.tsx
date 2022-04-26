import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../../Components/Container";
import { Button, Buttons, Form, FormContainer, Input, StyledLink, Title } from "../../Components/Form";
import { errorModal, successModal } from "../../factories/modal";
import useAuth from "../../hooks/userContext";
import * as apiAuth from '../../services/api'

function Login() {
		const { user, login } = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
		let navigate = useNavigate()

		useEffect(() => {
			if(user) {
				navigate('/home')
			}
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [user])

		function handlerSubmit(e: any) {
			e.preventDefault()
			const body = {
				email,
				password
			}

			apiAuth.login(body)
				.then(({ data }) => {
					successModal('login realizado')
					login(data)
					navigate('/home')
				})
				.catch(({ request: status }) => {
					registerError(status)
				})
		}

		function registerError(status: any) {
			const messageStatus = {
				401: 'Senha incorreta!',
				404: 'E-mail não encontrado',
				422: 'Campo(s) inválido(s)!',
				500: 'Erro com o servidor, tente novamente mais tarde, por favor'
			}

			if(status === 401) {
				errorModal(messageStatus[401])
			}
			if(status === 404) {
				errorModal(messageStatus[404])
			}
			if(status === 422) {
				errorModal(messageStatus[422])
			}
			if(status === 500) {
				errorModal(messageStatus[500])
			}
		}

  return (
			<AuthContainer>
				<Title>Login</Title>
				<FormContainer>
					<Form onSubmit={handlerSubmit}>
						<Input
							type='email'
							placeholder="E-mail"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							type='password'
							placeholder="Senha"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Buttons>
							<StyledLink to='/sign-up'>
								Não possuo cadastro
							</StyledLink>
							<Button type='submit'>
								ENTRAR
							</Button>
						</Buttons>
					</Form>
				</FormContainer>
			</AuthContainer>
	);
}
export default Login;
