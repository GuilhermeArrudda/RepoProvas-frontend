import { Container, Logo } from "./styles";
import logo from '../../assets/logo.svg'

function AuthContainer ({ children }: any) {
	return(
		<Container>
			<Logo src={logo} alt="logo"/>
			{children}
		</Container>
	)
} 

export default AuthContainer
