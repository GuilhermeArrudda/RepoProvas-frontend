import { LoadingButton } from "@mui/lab";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../../Components/Container";
import { Buttons, Form, FormContainer, GitHubButton, Input, Line, StyledLink, Title } from "../../Components/Form";
import { errorModal, successModal } from "../../factories/modal";
import useAuth from "../../hooks/userContext";
import * as authApi from "../../services/api"

function SignUp() {
		const { user } = useAuth()
		const [email, setEmail] = useState('')
		const [password, setPassword] = useState('')
		const [confirmPassword, setConfirmPassword] = useState("")
		const [isLoading, setIsLoading] = useState(false)
		let navigate = useNavigate()

		useEffect(() => {
			if(user) {
				navigate('/')
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
				.then(() => {
					setIsLoading(true)
					successModal('Sign-up was successful')
					navigate('/')
				})
				.catch(({ response }) => {
					registerError(response.status)
				})
				.finally(() => {
					setIsLoading(false)
				})
			}

		function registerError(status: number) {
			const messageStatus = {
				409: 'Email is already in use!',
				422: 'Invalid inputs',
				500: 'Error with server, try again later'
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
			errorModal('Not yet implemented')
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
								<LoadingButton 
									type='submit' 
									variant='contained'
									disabled={isLoading}
									loading={isLoading}
									>
										Cadastrar
								</LoadingButton>
							</Buttons>
						</Form>
					</FormContainer>
					</AuthContainer>
  );
}
export default SignUp