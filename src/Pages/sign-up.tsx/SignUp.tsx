import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../../Components/Container";
import { Button, Buttons, Form, FormContainer, GitHubButton, Input, Line, StyledLink, Title } from "../../Components/Form";
import { errorModal, successModal } from "../../factories/modal";
import useAuth from "../../hooks/userContext";
import * as authApi from "../../services/api"

function SignUp() {
		const { auth, login } = useAuth()
		const [email, setEmail] = useState('')
		const [password, setPassword] = useState('')
		const [confirmPassword, setConfirmPassword] = useState("")
		let navigate = useNavigate()

		useEffect(() => {
			if(auth & auth?.token) {
				navigate('/disciplines')
			}
		})

		function handlerSubmit(e: any) {
			e.preventDefault()

			if(confirmPassword !== password){
				alert("Passwords must be the same")
				return;
			}

			const body = {
				email,
				password
			}

			authApi.signUp(body)
				.then(({ data }) => {
					successModal('Cadastro realizado')
					login(data)
					navigate('/')
				})
				.catch(({ request: status }) => {
					registerError(status)
				})
			}

		function registerError(status: any) {
			const messageStatus = {
				409: 'E-mail já cadastrado!',
				422: 'Campo(s) inválido(s)!',
				500: 'Erro com o servidor, tente novamente mais tarde, por favor'
			}

			if(status === 409) {
				errorModal(messageStatus[409])
			}
			if(status === 422) {
				errorModal(messageStatus[422])
			}
			if(status === 500) {
				errorModal(messageStatus[500])
			}
		}

		function handlerLoginWithGithub() {
			alert('Essa funcionalidade ainda está em construção')
		}

  return (
				<AuthContainer>
					<Title>Cadastro</Title>
					<FormContainer>
						<GitHubButton
							type="button"
							onClick={handlerLoginWithGithub}
						>
							Entrar com o Github
						</GitHubButton>
						<Line><span>ou</span></Line>
						<Form onSubmit={handlerSubmit}>
							<Input
								type='email'
								placeholder='E-mail'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Input
								type='password'
								placeholder='Senha'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Input
								type='password'
								placeholder='Confirme sua senha'
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
							<Buttons>
								<StyledLink to='/'>
										Já possuo cadastro
								</StyledLink>
								<Button type='submit'>
										Cadastrar
								</Button>
							</Buttons>
						</Form>
					</FormContainer>
					</AuthContainer>
  );
}
export default SignUp